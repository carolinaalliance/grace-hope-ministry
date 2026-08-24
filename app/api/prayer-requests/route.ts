import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing Supabase environment variables.");

      return NextResponse.json(
        {
          success: false,
          message: "Prayer Care is temporarily unavailable.",
        },
        { status: 500 }
      );
    }

    const visibilityMap: Record<string, string> = {
      pastor: "pastor_only",
      "prayer-team": "approved_prayer_team",
      "church-list": "church_prayer_list",
      anonymous: "anonymous_prayer_wall",
    };

    const {
      name,
      email,
      phone,
      category,
      requestTitle,
      prayerRequest,
      visibility,
      followUpRequested,
      allowFutureUpdates,
      consentConfirmed,
    } = body;

    if (
      !category ||
      !requestTitle ||
      !prayerRequest ||
      !visibility ||
      !consentConfirmed
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    const response = await fetch(
      `${supabaseUrl}/rest/v1/prayer_requests`,
      {
        method: "POST",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          requester_name: name || null,
          requester_email: email || null,
          requester_phone: phone || null,

          is_anonymous: !name,

          category,

          title: requestTitle,

          request_text: prayerRequest,

          priority: "routine",

          visibility:
            visibilityMap[visibility] || "pastor_only",

          follow_up_type: followUpRequested
            ? "pastor_contact"
            : "prayer_only",

          status: "new",

          follow_up_requested: Boolean(
            followUpRequested
          ),

          allow_future_updates: Boolean(
            allowFutureUpdates
          ),

          consent_confirmed: true,

          prayer_wall_approved: false,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        "Supabase prayer submission error:",
        errorText
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "We could not submit your prayer request. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Your prayer request has been received.",
    });
  } catch (error) {
    console.error(
      "Prayer request API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "We could not submit your prayer request. Please try again.",
      },
      { status: 500 }
    );
  }
}
