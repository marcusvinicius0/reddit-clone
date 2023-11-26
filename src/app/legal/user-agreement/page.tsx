import { FC } from "react";

const page: FC = () => {
  return (
    <div className="h-full mx-auto">
      <h1 className="bg-[#F1ECE6] h-20 w-full text-5xl text-center">
        User Agreement
      </h1>

      <main>
        <section>
          <em>Effective on November 21, 2023</em>

          <p>
            Our mission is to connect the worlds professionals to allow them to
            be more productive and successful. Our services are designed to
            promote economic opportunity for our members by enabling you and
            millions of other professionals to meet, exchange ideas, learn, and
            find opportunities or employees, work, and make decisions in a
            network of trusted relationship.
          </p>

          <h2>Table of Contents:</h2>

          <ol>
            <li>Introduction</li>
            <li>Obligations</li>
            <li>Rights and Limits</li>
            <li>Disclaimer and Limit of Liability</li>
            <li>Termination</li>
            <li>Governing Law and Dispute Resolution</li>
            <li>General Terms</li>
            <li>Breadit Dos and Donts</li>
            <li>Complaints Regarding Content</li>
            <li>How To Contact Us</li>
          </ol>
        </section>

        <section>
          <h2>Introduction</h2>
          <h3>1.1 Contract</h3>

          <div>
            {/* lamp icon */}
            <p>
              When you use our Services you agree to all of these terms. Your
              use of our Services is also subject to our Cookie Policy and our
              Privacy Policy, which covers how we collect, use, share, and store
              your personal information.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default page;
