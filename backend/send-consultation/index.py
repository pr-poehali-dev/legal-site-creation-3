import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки на консультацию на почту адвоката."""

    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    body = json.loads(event.get("body") or "{}")

    name = body.get("name", "")
    phone = body.get("phone", "")
    email = body.get("email", "")
    category = body.get("category", "")
    date = body.get("date", "")
    time = body.get("time", "")
    message = body.get("message", "")

    smtp_user = "nureewrin@yandex.ru"
    smtp_password = os.environ["SMTP_PASSWORD"]
    to_email = "nureewrin@yandex.ru"

    html_body = f"""
    <html>
    <body style="font-family: Arial, sans-serif; color: #1a1a2e; max-width: 600px;">
      <div style="background: #0f2d4a; padding: 24px; text-align: center;">
        <h2 style="color: #e8b84b; margin: 0; font-size: 20px;">Новая заявка на консультацию</h2>
      </div>
      <div style="padding: 24px; border: 1px solid #e0e0e0;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; color: #666; width: 160px;"><b>Имя:</b></td><td style="padding: 10px 0;">{name}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding: 10px 0; color: #666;"><b>Телефон:</b></td><td style="padding: 10px 0;">{phone}</td></tr>
          <tr><td style="padding: 10px 0; color: #666;"><b>Email:</b></td><td style="padding: 10px 0;">{email or '—'}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding: 10px 0; color: #666;"><b>Категория:</b></td><td style="padding: 10px 0;">{category}</td></tr>
          <tr><td style="padding: 10px 0; color: #666;"><b>Дата:</b></td><td style="padding: 10px 0;">{date}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding: 10px 0; color: #666;"><b>Время:</b></td><td style="padding: 10px 0;">{time}</td></tr>
          <tr><td style="padding: 10px 0; color: #666; vertical-align: top;"><b>Описание:</b></td><td style="padding: 10px 0;">{message or '—'}</td></tr>
        </table>
      </div>
      <div style="background: #f5f5f5; padding: 12px 24px; font-size: 12px; color: #999;">
        Сообщение сформировано автоматически с сайта адвоката Нуреева Р.Р.
      </div>
    </body>
    </html>
    """

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Заявка на консультацию от {name}"
    msg["From"] = smtp_user
    msg["To"] = to_email
    msg.attach(MIMEText(html_body, "html", "utf-8"))

    with smtplib.SMTP_SSL("smtp.yandex.ru", 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, to_email, msg.as_string())

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({"ok": True}),
    }
