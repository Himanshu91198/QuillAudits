import { Inter, Poppins } from "next/font/google";
import React from "react";
import Image from "next/image";
import infoImg1 from "@/public/Images/InfoImg-1.jpg";
import infoImg2 from "@/public/Images/InfoImg-2.jpg";
import { Tweet } from "react-tweet";
import rect from "@/public/Images/Rect.jpg";
import upperQuote from "@/public/Images/quote-1.png";
import downQuote from "@/public/Images/quote-2.png";
import stars from "@/public/Images/stars.png";
import mask from "@/public/Images/ImgMask.jpg";
import maskImg from "@/public/Images/MaskImage.png";

const inter = Inter({
  subsets: ["latin"],
});

const pop = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Information = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-16">
      <div className="w-full lg:w-3/4 grid grid-cols-5">
        <div className="px-6 lg:col-span-3 col-span-5">
          <div className="flex flex-col gap-10 pr-0 lg:pr-20">
            <p className={`${pop.className} text-lg font-normal leading-7`}>
              Carpe Diem Pension, on Pulse blockchain, redefines retirement with
              a self-managed, inclusive, globally portable fund. Unique for its
              token burn mechanism, it ensures a sustainable 4.32% inflation
              payout. With $143.11k and 41.06% of CDP already burned, it serves
              35 users globally.
            </p>
            <h3 className=" text-[34px] leading-10 font-bold">
              CarpeDiem Pension&apos;s Flexible, Blockchain-Enabled Future
            </h3>
            <p className={`${pop.className} text-lg font-normal leading-7`}>
              CarpeDiem Pension redefines retirement planning with a unique
              approach that deviates from traditional pension funds. With no
              minimum age for retirement, it offers flexibility and freedom,
              ensuring all genders receive equal treatment. CarpeDiem Pension
              ensures blockchain transparency, anonymity, and global
              accessibility, safeguarding pensions during international
              relocation. Easily transfer pensions to loved ones; share wallet
              access. Re-deposit payouts for increased future benefits.
              Importantly, CarpeDiem Pension prioritizes deposit security by
              avoiding utilizing client funds for internal investments. To
              become a part of this forward-thinking pension scheme, one simply
              needs to install and configure a blockchain wallet.
            </p>
          </div>
          <Image src={infoImg1} alt="info-Image-1" className="mt-10"></Image>
          <div className="flex flex-col gap-10 pr-0 lg:pr-20 mt-14">
            <h3 className=" text-[34px] leading-10 font-bold">
              CarpeDiem Pension&apos;s Challenges: Enhancing Security Against
              Reentrancy, Front-Running, and Infinite Minting
            </h3>
            <p className={`${pop.className} text-lg font-normal leading-7`}>
              CarpeDiem Pension confronts critical security challenges,
              including the risks of reentrancy and front-running
              exploits.Malicious actors may exploit contract vulnerabilities,
              withdrawing excess funds or manipulating transaction timing for
              unfair advantages. System faces infinite minting threats, risking
              economic stability with endless creation of CDP tokens or pension
              shares.  Addressing these challenges is paramount to safeguarding
              the integrity and security of CarpeDiem Pension.
            </p>
          </div>
          <Image src={infoImg2} alt="info-Image-1" className="mt-10"></Image>
          <div className="flex flex-col gap-10 pr-0 lg:pr-20 mt-14">
            <h3 className=" text-[34px] leading-10 font-bold">
              CarpeDiem Pension&apos;s Journey Through our Audit Process
            </h3>
            <div className={`${pop.className} text-lg font-normal leading-7`}>
              <h3
                className={`flex flex-col ${pop.className} text-2xl font-semibold leading-7`}
              >
                1. Information Gathering:
                <ul
                  className="flex flex-col gap-4 pl-5 text-lg font-normal leading-7"
                  style={{
                    listStyleType: "disc",
                  }}
                >
                  <li className="pt-4">
                    Collected and reviewed all relevant documentation, including
                    whitepaper, technical specifications, and design documents.
                  </li>
                  <li>
                    Obtained a clear understanding of the CDP platform&apos;s
                    functionality, economic model, and intended user
                    interactions.
                  </li>
                  <li>
                    Discussed client concerns and specific areas of focus for
                    the audit.
                  </li>
                </ul>
              </h3>
              <h3
                className={`flex flex-col ${pop.className} text-2xl font-semibold leading-7 mt-8`}
              >
                2. Manual Code Review:
                <ul
                  className="flex flex-col gap-4 pl-5 text-lg font-normal leading-7"
                  style={{
                    listStyleType: "disc",
                  }}
                >
                  <li className="pt-4">
                    Conducted a line-by-line review of the smart contract code,
                    focusing on:
                    <ul
                      className="pl-10 pt-4 flex flex-col gap-4"
                      style={{
                        listStyleType: "circle",
                      }}
                    >
                      <li>
                        <span className=" italic font-medium mr-1">
                          Vulnerability identification:
                        </span>{" "}
                        Searching for known vulnerabilities like reentrancy,
                        front-running, integer overflows, and access control
                        issues etc.
                      </li>
                      <li>
                        <span className=" italic font-medium mr-1">
                          Logic flaws:
                        </span>{" "}
                        Identifying inconsistencies or unintended behaviors in
                        the code logic
                      </li>
                      <li>
                        <span className=" italic font-medium mr-1">
                          Tokenomics correctness:
                        </span>{" "}
                        Verifying if the code accurately implements the intended
                        economic model and token distribution mechanisms.
                      </li>
                      <li>
                        <span className="italic font-medium mr-1">
                          Solidity best practices:
                        </span>{" "}
                        Compliance with secure coding standards and adherence to
                        established guidelines.
                      </li>
                    </ul>
                  </li>
                </ul>
              </h3>
              <h3
                className={`flex flex-col ${pop.className} text-2xl font-semibold leading-7 mt-8`}
              >
                3. Functional Testing:
                <ul
                  className="flex flex-col gap-4 pl-5 text-lg font-normal leading-7"
                  style={{
                    listStyleType: "disc",
                  }}
                >
                  <li className="pt-4">
                    Developed and executed a comprehensive set of test cases
                    covering various user interactions and edge cases.
                  </li>
                  <li>
                    Simulated different deposit, claim, and referral scenarios
                    to assess functionality and uncover potential exploits.
                  </li>
                  <li>
                    Focused on scenarios identified during the manual review and
                    client concerns (e.g., infinite minting, reward calculation
                    errors).
                  </li>
                  <li>
                    Leveraged tools like Hardhat and Ganache to deploy and test
                    the smart contract locally.
                  </li>
                </ul>
              </h3>
              <h3
                className={`flex flex-col ${pop.className} text-2xl font-semibold leading-7 mt-8`}
              >
                4. Automated Testing:
                <ul
                  className="flex flex-col gap-4 pl-5 text-lg font-normal leading-7"
                  style={{
                    listStyleType: "disc",
                  }}
                >
                  <li className="pt-4">
                    Employed static analysis tools like Slither to identify
                    vulnerabilities through automated code scanning.
                  </li>
                  <li>
                    Utilized symbolic execution tools like Mythril to explore
                    various code execution paths and uncover potential attack
                    vectors.
                  </li>
                  <li>
                    Integrated unit tests are written by the CDP team to verify
                    specific contract functions and their behaviour.
                  </li>
                </ul>
              </h3>
              <h3
                className={`flex flex-col ${pop.className} text-2xl font-semibold leading-7 mt-8`}
              >
                5. Reporting & Remediation:
                <ul
                  className="flex flex-col gap-4 pl-5 text-lg font-normal leading-7"
                  style={{
                    listStyleType: "disc",
                  }}
                >
                  <li className="pt-4">
                    Prepared a detailed report outlining all identified
                    vulnerabilities, categorized by severity and potential
                    impact.
                  </li>
                  <li>
                    Provided clear recommendations for fixing each
                    vulnerability, including code snippets and best practices.
                  </li>
                  <li>
                    Collaborated with the CDP team to prioritize and address the
                    identified issues.
                  </li>
                  <li>
                    Conducted additional verification testing after
                    vulnerability fixes were implemented.
                  </li>
                </ul>
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-10 pr-0 lg:pr-20 mt-14">
            <h3 className=" text-[34px] leading-10 font-bold">
              QuillAudit&apos;s Strategic Approach to CDP Security Audits
            </h3>
            <p className={`${pop.className} text-lg font-normal leading-7`}>
              We prioritize threat modeling based on platform-specific risks.
              Security-first, we identify and mitigate vulnerabilities beyond
              functionality testing. Using white-box and black-box tests, we
              conduct thorough vulnerability assessments. Maintaining
              transparency, we communicate openly with the CDP team. Emphasizing
              clarity, we present actionable insights for efficient issue
              resolution.
            </p>
          </div>
          <div className="flex flex-col gap-10 pr-0 lg:pr-20 mt-14">
            <h3 className=" text-[34px] leading-10 font-bold">
              Comprehensive Audit Discoveries and Remediation Strategies
            </h3>
            <p className={`${pop.className} text-lg font-normal leading-7`}>
              Throughout the audit process, we unearthed a total of 33 issues,
              spanning from minor concerns to critical vulnerabilities. Among
              these, some of the critical issues identified were: Here&apos;s
              how we remediated them :
            </p>
            <h3 className={`${pop.className} text-lg font-semibold leading-7`}>
              1. Unauthorized Claim/Compound:
              <ul
                className="pt-4 ml-10 text-lg font-normal leading-7"
                style={{
                  listStyleType: "lower-alpha",
                }}
              >
                <li>
                  Users could claim/compound a substantial amount without making
                  a deposit or waiting for the stipulated time.
                </li>
              </ul>
            </h3>
            <h3 className={`${pop.className} text-lg font-semibold leading-7`}>
              2. Precision Loss in mintCDP():
              <ul
                className="pt-4 ml-10 text-lg font-normal leading-7"
                style={{
                  listStyleType: "lower-alpha",
                }}
              >
                <li>
                  Precision loss and unscaled values were identified while
                  calculating rewardPerShare in the mintCDP() function.
                </li>
              </ul>
            </h3>
            <h3 className={`${pop.className} text-lg font-semibold leading-7`}>
              3. Multiplication Accuracy:
              <ul
                className="pt-4 ml-10 text-lg font-normal leading-7"
                style={{
                  listStyleType: "lower-alpha",
                }}
              >
                <li>
                  Multiplication operations were prone to providing incorrect
                  answers due to unscaled values, posing a potential risk to
                  accurate calculations.
                </li>
              </ul>
            </h3>
            <h3 className={`${pop.className} text-lg font-semibold leading-7`}>
              4. Incorrect Share Allocation:
              <ul
                className="pt-4 ml-10 text-lg font-normal leading-7"
                style={{
                  listStyleType: "lower-alpha",
                }}
              >
                <li>
                  The protocol was allocating shares for all days, even when
                  there were no corresponding deposits, leading to inefficient
                  use of resources.
                </li>
              </ul>
            </h3>
            <h3 className={`${pop.className} text-lg font-semibold leading-7`}>
              5. Logic Error in Referral Handling:
              <ul
                className="pt-4 ml-10 text-lg font-normal leading-7"
                style={{
                  listStyleType: "lower-alpha",
                }}
              >
                <li>
                  A logic error resulted in users always having their
                  user.referral set to address(0), which could be exploited to
                  trick the referral system
                </li>
              </ul>
            </h3>
            <h3 className={`${pop.className} text-lg font-semibold leading-7`}>
              6. Referral Exploitation:
              <ul
                className="pt-4 ml-10 text-lg font-normal leading-7"
                style={{
                  listStyleType: "lower-alpha",
                }}
              >
                <li>
                  Users could exploit the referral system to extract more CDP
                  from the protocol, undermining its integrity.
                </li>
              </ul>
            </h3>
          </div>
          <div className="flex flex-col gap-10 pr-0 lg:pr-20 mt-14">
            <h3 className=" text-[34px] leading-10 font-bold">
              Remediation & Impact:
            </h3>
            <p className={`${pop.className} text-lg font-normal leading-7`}>
              All identified vulnerabilities were addressed by the CDP team,
              significantly enhancing the smart contract&apos;s security
              posture. Key improvements include
            </p>
            <ul
              className={`ml-8 ${pop.className} text-lg font-normal leading-7 flex flex-col gap-4`}
              style={{
                listStyleType: "disc",
              }}
            >
              <li>Implementation of reentrancy protection mechanisms.</li>
              <li>
                Accurate handling of decimal values using established libraries
                or best practices.
              </li>
              <li>Revised calculations with proper scaling factors</li>
              <li>
                Fixing logic errors to ensure deposits and waiting periods are
                enforced.
              </li>
              <li>
                Addressing referral system vulnerabilities to prevent abuse.
              </li>
            </ul>
          </div>
          <div className="mt-16">
            <Tweet id="1742906560794296402" />
            <p
              className={`${pop.className} text-lg font-normal leading-7 mt-10`}
            >
              CDP smart contract audit revealed and fixed critical
              vulnerabilities, safeguarding funds and ensuring platform
              stability. This underscores the need for proactive security in
              blockchain projects, crucial for financial asset management.
              Through audits and issue resolution, CDP reinforces platform
              security, bolstering user trust.
            </p>
          </div>
          <div className="relative mt-16 review-box">
            <div className="relative text-[#fff]">
              <Image
                className="absolute -z-10 w-full lg:h-[157px] h-[166px]"
                src={rect}
                alt="background-img"
              ></Image>
              <Image
                className="absolute -z-10 top-4 left-4"
                src={upperQuote}
                alt="background-img"
              ></Image>
              {/* Pc view */}
              <div className="lg:flex hidden flex-col">
                <div className="flex items-center justify-center gap-40">
                  <div className="flex flex-col">
                    <h2 className=" text-3xl leading-10 font-semibold pt-10">
                      Sally Radley
                    </h2>
                    <h3 className=" text-lg leading-7 font-normal">
                      WebGFi - CEO
                    </h3>
                    <Image
                      className="pt-16"
                      src={stars}
                      alt="5-starRating"
                    ></Image>
                  </div>
                  <div>
                    <Image
                      className="rounded-xl"
                      src={mask}
                      alt="image-mask"
                    ></Image>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-8 px-14 pb-20 pt-6">
                    <p className="text-[#000] text-base leading-6 font-normal">
                      “It felt like the auditing team was available within a
                      short timeframe, which was excellent. The auditing process
                      looked thorough, and I really appreciate the fact that you
                      took time to investigate GAS optimizations.”
                    </p>
                  </div>
                </div>
              </div>
              {/* Mobile view */}
              <div className="lg:hidden flex flex-col">
                <div className="flex items-center justify-center px-6 gap-6 pt-14">
                  <div>
                    <Image
                      className="rounded-xl"
                      src={maskImg}
                      alt="image-mask"
                    ></Image>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <h2 className=" text-3xl leading-10 font-semibold">
                        Carpediem
                      </h2>
                      <h3 className=" text-lg leading-7 font-normal">Team</h3>
                    </div>
                    <div>
                      <Image src={stars} alt="5-starRating"></Image>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-8 px-6 lg:px-14 pb-10 lg:pb-20 pt-6">
                    <p className="text-[#000] text-base leading-6 font-normal">
                      “It felt like the auditing team was available within a
                      short timeframe, which was excellent. The auditing process
                      looked thorough, and I really appreciate the fact that you
                      took time to investigate GAS optimizations.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                className="absolute bottom-4 right-4"
                src={downQuote}
                alt="Quote"
              ></Image>
            </div>
          </div>
        </div>
        <div className=" pt-20 hidden lg:block px-10 col-span-2">
          <div className="flex flex-col gap-4 pt-3 pl-6 pb-8 dialog rounded-md">
            <div className="flex flex-col">
              <h5
                className={`${inter.className} font-normal text-sm leading-5 text-[#808080]`}
              >
                Headquarters
              </h5>
              <h4
                className={`${inter.className} font-medium text-base leading-6 text-[#00000A]`}
              >
                Switzerland
              </h4>
            </div>
            <div className="flex flex-col">
              <h5
                className={`${inter.className} font-normal text-sm leading-5 text-[#808080]`}
              >
                Chain
              </h5>
              <h4
                className={`${inter.className} font-medium text-base leading-6 text-[#00000A]`}
              >
                Pulse Blockchain
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
