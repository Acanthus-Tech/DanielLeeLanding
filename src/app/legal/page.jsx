import Footer from "@/components/Footer";
import styles from "./page.module.css";
import Navigation from "@/components/Navigation";
const Legal = () => {
  return (
    <>
    <Navigation/>
    <div className={styles.container}>
      <h1>Terms and Conditions, SMS/MMS Privacy Policy</h1>
      <p>
        <strong>Last Updated: November 5, 2025</strong>
      </p>
      <p>
        <strong>Introduction</strong>
        <p>
          At Citizens for Daniel Lee, we are committed to protecting your
          privacy. This policy explains how we collect, use, and safeguard
          personal information in connection with our SMS/MMS messaging
          services, in compliance with 10DLC regulations.
        </p>
      </p>
      <p>
        <strong>Information We Collect</strong>
        <p>
          We collect personal information, such as your name and phone number,
          when you opt-in to receive SMS/MMS communications. Additionally, we
          may collect device and location data as required for regulatory
          compliance.
        </p>
      </p>
      <p>
        <strong>How We Obtain Consent</strong>
        <p>
          By opting into our messaging services—whether through online forms,
          text message keywords, or other methods—you provide explicit consent
          to receive SMS/MMS messages. We do not send messages without prior
          opt-in.
        </p>
      </p>
      <p>
        <strong>How We Use Information</strong>
        <p>
          The information we collect is used solely to send notifications,
          alerts, and campaign-related communications, and to comply with 10DLC
          regulations.
        </p>
      </p>
      <p>
        <strong>We Do Not Sell Your Information</strong>
        <p>
          We will never sell your personal information, including your mobile
          opt-in information, to third parties for marketing purposes. Your
          information is used only for the purposes outlined in this policy.
        </p>
      </p>
      <p>
        <strong>Sharing of Information</strong>
        <p>
          We may share your information with trusted third-party providers who
          help us deliver messaging services. However, we do not disclose or
          share consumer mobile opt-in information with unrelated parties.
        </p>
      </p>
      <p>
        <strong>Opting Out</strong>
        <p>
          You can opt out at any time by replying with STOP or another
          designated opt-out keyword.
        </p>
      </p>
      <p>
        <strong>Messaging Terms & Conditions</strong>
        <p>
          When you opt-in to receive SMS/MMS communications from Citizens for
          Daniel Lee, you agree to receive informational and campaign-related
          messages. Frequency may vary. Message & Data rates may apply. Text
          STOP to opt-out. Text HELP for assistance or contact us at
          info@citizens4daniellee.com or (630) 259-6652.
        </p>
      </p>
      <p>
        <strong>Your Privacy Rights</strong>
        <p>
          You have the right to access, correct, or delete your personal
          information. To exercise these rights, please contact us using the
          details below.
        </p>
      </p>
      <p>
        <strong>Updates to This Policy</strong>
        <p>
          This policy may be updated periodically to reflect changes in
          regulations or business practices. Please review it regularly.
        </p>
      </p>
      <p>
        <strong>Contact Information</strong>
        <p>
          If you have any questions or concerns about this policy, please
          contact us: Email: info@citizens4daniellee.com Phone: (630) 259-6652
        </p>
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default Legal;
