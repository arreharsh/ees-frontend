import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function handler(event) {
  const headers = {
    "Access-Control-Allow-Origin": "https://www.easyelectrical.in",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { type, ...data } = JSON.parse(event.body);

    if (!type) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Form type is required" }),
      };
    }

    // -------------------------
    // VALIDATION
    // -------------------------
    if (type === "callback") {
      if (!data.name || !data.phone || !data.time) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: "Missing callback fields" }),
        };
      }
    }

    if (type === "quote") {
      if (!data.name || !data.phone || !data.email) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: "Missing quote fields" }),
        };
      }
    }

    // -------------------------
    // TEMPLATE SELECT
    // -------------------------
    const templatePath =
      type === "callback"
        ? path.join(
            process.cwd(),
            "netlify/functions/templates/callback.html"
          )
        : path.join(
            process.cwd(),
            "netlify/functions/templates/getquote.html"
          );

    let html = fs.readFileSync(templatePath, "utf8");

    // -------------------------
    // REPLACE PLACEHOLDERS
    // -------------------------
    html = html
      .replace(/{{name}}/g, data.name || "")
      .replace(/{{phone}}/g, data.phone || "")
      .replace(/{{time}}/g, data.time || "")
      .replace(/{{email}}/g, data.email || "")
      .replace(/{{message}}/g, data.message || "")
      .replace(/{{requirement}}/g, data.requirement || "")
      .replace(
        /{{title}}/g,
        type === "callback"
          ? "📞 New Callback Request"
          : "💰 New Quote Request"
      );

    // -------------------------
    // MAIL TRANSPORT
    // -------------------------
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject =
      type === "callback"
        ? "📞 New Callback Request"
        : "💰 New Quote Request";

    // -------------------------
    // SEND MAIL
    // -------------------------
    await transporter.sendMail({
      from: `"${data.name || "Website Lead"}" <${process.env.SMTP_USER}>`,
      replyTo: data.email || undefined,
      to: process.env.RECEIVER_EMAIL,
      subject,
      html,
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Email sent successfully",
      }),
    };
  } catch (err) {
    console.error("EMAIL ERROR:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
}
