import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from "../Newsletter/NewsLetter.jsx";

export default function MailchimpForm() {
  // const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
      <MailchimpSubscribe
        // url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter/>
        )}
        />
    </>
  )
}