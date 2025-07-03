import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";
import { client, sender } from "./mailTrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
  try {
    const response = await client.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verifications",
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error(`Error sending verification email : ${error}`);
    throw new Error(`Error sending verification email `);
  }
};

export const sendWelcomeEmail = async (email,name) => {
  const recipient = [{ email }];
  try {
    const response=await client.send({
      from: sender,
      to: recipients,
      template_uuid: "1c031c81-f1d7-402d-a0ca-2f093d95bf22",
      template_variables: {
        company_info_name: "Note Making",
        name: name,
      },
    });
    console.log("Welcome email sent successfully");
    
  } catch (error) {
    
  }
};
