import React from 'react';
import "./advisors.css";
import advisors2 from "../../assets/board-advisor.svg";
import advisors1 from "../../assets/board-advisor1.svg";
import advisor3 from "../../assets/board-advisor2.svg";
import advisor4 from "../../assets/board-advisor3.svg";
import advisor5 from "../../assets/advisor5.svg";
import advisor6 from "../../assets/advisor6.svg";
import advisor7 from "../../assets/advisor7.svg";
import advisor8 from "../../assets/advisor8.svg";
import 'flowbite'

const BoardAdvisor = () => {
    return (
        <>
            <section>
                <div className="container mt-20">
                    <div className="director-heading">
                        <h2 className='board-heading'>Board of Advisors</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-5 md:p-2">
                    <div>
                        <figure className="rounded-xl p-4 wrapper">
                            <img className="w-24 h-24 rounded-full mx-auto" src={advisors1} alt="" style={{
                                width: "150px",
                                height: "150px"
                            }} />
                            <div className="pt-6 text-center space-y-4">
                                <figcaption className="text-lg">
                                    <div className="text-black">
                                        MR. LALATENDU MAHAPATRA
                                    </div>
                                    <div className="text-slate-700 dark:text-slate-500">
                                        CHAIRMAN ADVISORY BOARD
                                    </div>
                                </figcaption>
                                <blockquote>
                                    <p className="text-lg advisor-para">
                                        “Mr. Mahapatra has over 30 years’ of experience in assisting the US multinational companies in establishing strategies for their successful entry into the marketplace of India. Mr. Mahapatra, has significant success in winning over several billion dollar..”
                                    </p>
                                </blockquote>
                                <div className="block justify-center space-y-4 md:flex md:space-y-0 md:space-x-4">
                                    <button data-modal-target="large-modal" data-modal-toggle="large-modal" className="block w-full md:w-auto text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button">
                                        Read More
                                    </button>
                                </div>
                                <div id="large-modal" tabindex="-1" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                    <div className="relative w-full max-w-4xl max-h-full">

                                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <div className="flex text-center p-3 border-b rounded-t dark:border-gray-600">
                                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="large-modal">
                                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    <span className="sr-only">Close modal</span>
                                                </button>
                                            </div>

                                            <div className="p-6 space-y-6">
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    Mr. Mahapatra has over 30 years’ of experience in assisting the US multinational companies in establishing strategies for their successful entry into the marketplace of India. Mr. Mahapatra, has significant success in winning over several billion dollar businesses opportunities in India in various sectors such as telecom, chemical, infrastructure including the FDI. <br></br>


                                                    Mr. Mahapatra is one of the co-founders of Quantum Technologies and Quantum Simulators Private Limited. His formal education includes Engineering, MBA and Law.
                                                </p>
                                            </div>

                                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                <button data-modal-hide="large-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </figure>
                    </div>
                    <div>
                        <figure className="rounded-xl p-4 wrapper">
                            <img className="w-24 h-24 rounded-full mx-auto" src={advisor3} alt="" style={{
                                width: "150px",
                                height: "150px"
                            }} />
                            <div className="pt-6 text-center space-y-4">
                                <figcaption className="text-lg">
                                    <div className="text-black">
                                        MR. DELBERT WINN
                                    </div>
                                    <div className="text-slate-700 dark:text-slate-500">
                                        GENERAL COUNSEL
                                    </div>
                                </figcaption>
                                <blockquote>
                                    <p className="text-lg advisor-para">
                                        “Mr. Winn specializes in International Business Development, International Sales, International Distribution, Establishing International Distribution, and Licensing Networks, U.S. Foreign Corrupt Practices Act (FCPA) Training & Compliance,”
                                    </p>
                                </blockquote>
                                <div className="block justify-center space-y-4 md:flex md:space-y-0 md:space-x-4">
                                    <button data-modal-target="large-modal" data-modal-toggle="large-modal" className="block w-full md:w-auto text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button">
                                        Read More
                                    </button>
                                </div>
                                <div id="large-modal" tabindex="-1" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                    <div className="relative w-full max-w-4xl max-h-full">

                                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <div className="flex text-center p-3 border-b rounded-t dark:border-gray-600">
                                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="large-modal">
                                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    <span className="sr-only">Close modal</span>
                                                </button>
                                            </div>

                                            <div className="p-6 space-y-6">
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    Mr. Winn specializes in International Business Development, International Sales, International Distribution, Establishing International Distribution, and Licensing Networks, U.S. Foreign Corrupt Practices Act (FCPA) Training & Compliance, Domestic & International Regulatory Compliance, Overseas Manufacturing, Overseas Outsourcing, Global Licensing and International Law.
                                                </p>
                                            </div>

                                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                <button data-modal-hide="large-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </figure>
                    </div>




                    <div>
                        <figure className="rounded-xl p-4 wrapper">
                            <img className="w-24 h-24 rounded-full mx-auto" src={advisor4} alt="" style={{
                                width: "150px",
                                height: "150px"
                            }} />
                            <div className="pt-6 text-center space-y-4">
                                <figcaption className="text-lg">
                                    <div className="text-black">
                                        MR. RON MOHLING
                                    </div>
                                    <div className="text-slate-700 dark:text-slate-500">
                                        STRATEGIC AND FINANCIAL ADVISOR
                                    </div>
                                </figcaption>
                                <blockquote>
                                    <p className="text-lg advisor-para">
                                        “Ron is the Chief Executive Officer of Southern Weaving Company. He joined the company in April of 2009 as a member of the Board of Directors and was appointed Chief Executive Officer in August of 2009. He has a strong history of running successful businesses.”
                                    </p>
                                </blockquote>
                                <div className="block justify-center space-y-4 md:flex md:space-y-0 md:space-x-4">
                                    <button data-modal-target="large-modal" data-modal-toggle="large-modal" className="block w-full md:w-auto text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button">
                                        Read More
                                    </button>
                                </div>
                                <div id="large-modal" tabindex="-1" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                    <div className="relative w-full max-w-4xl max-h-full">

                                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <div className="flex text-center p-3 border-b rounded-t dark:border-gray-600">
                                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="large-modal">
                                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    <span className="sr-only">Close modal</span>
                                                </button>
                                            </div>

                                            <div className="p-6 space-y-6">
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    Ron is the Chief Executive Officer of Southern Weaving Company. He joined the company in April of 2009 as a member of the Board of Directors and was appointed Chief Executive Officer in August of 2009. He has a strong history of running successful businesses

                                                    He served as the President of the International Consumer Products Division for Schering Plough Corporation, President of Consumer Business for Europe, Middle East and Africa for Bristol-Myers Squibb, and Chief Executive Officer and Chairman of FATS, Inc. (Firearms Training Systems) a worldwide high-tech training simulator company that was subsequently sold to Meggitt PLC.
                                                </p>
                                            </div>

                                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                <button data-modal-hide="large-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </figure>
                    </div>



                    <div>
                        <figure className="rounded-xl p-4 wrapper">
                            <img className="w-24 h-24 rounded-full mx-auto" src={advisors2} alt="" style={{
                                width: "150px",
                                height: "150px"
                            }} />
                            <div className="pt-6 text-center space-y-4">
                                <figcaption className="text-lg">
                                    <div className="text-black">
                                        MR. TED MORGAN
                                    </div>
                                    <div className="text-slate-700 dark:text-slate-500">
                                        STRATEGIC AND FINANCIAL ADVISOR
                                    </div>
                                </figcaption>
                                <blockquote>
                                    <p className="text-lg advisor-para">
                                        “Founder of ATI Capital Partners, ATI is a Merchant Banking firm, serving as an Advisor for companies in search of equity/debt financing and mergers/acquisitions' also serves as a principal and operating management”
                                    </p>
                                </blockquote>
                                <div className="block justify-center space-y-4 md:flex md:space-y-0 md:space-x-4">
                                    <button data-modal-target="large-modal" data-modal-toggle="large-modal" className="block w-full md:w-auto text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button">
                                        Read More
                                    </button>
                                </div>
                                <div id="large-modal" tabindex="-1" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                    <div className="relative w-full max-w-4xl max-h-full">

                                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <div className="flex text-center p-3 border-b rounded-t dark:border-gray-600">
                                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="large-modal">
                                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    <span className="sr-only">Close modal</span>
                                                </button>
                                            </div>

                                            <div className="p-6 space-y-6">
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    Founder of ATI Capital Partners, ATI is a Merchant Banking firm, serving as an Advisor for companies in search of equity/debt financing and mergers/acquisitions. ATI also serves as a principal and operating management group for early stage companies.

                                                    Ted’s broad range of major corporate executive management experience; entrepreneurial (Founder) start-up experience; venture capital and private equity finance experience; extensive international business experience; and experience with a broad range of Merchant Banking assignments including: Advisory, M&A, Divestiture, and Financing
                                                </p>
                                            </div>

                                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                <button data-modal-hide="large-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </figure>
                    </div>

                </div>
            </section>






            <section>
                {/* MANAGEMENT TEAM */}
                <div className="container my-14">
                    <div className="director-heading">
                        <h2 className='board-heading'>MANAGEMENT TEAM</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-5 md:p-2">
                    <div>
                        <figure className="rounded-xl p-4 wrapper">
                            <img className="w-24 h-24 rounded-full mx-auto" src={advisor5} alt="" style={{
                                width: "150px",
                                height: "150px"
                            }} />
                            <div className="pt-6 text-center space-y-4">
                                <figcaption className="text-lg">
                                    <div className="text-black">
                                        MR. RAJESH GROVER
                                    </div>
                                    <div className="text-slate-700 dark:text-slate-500">
                                        CHAIRMAN ADVISORY BOARD
                                    </div>
                                </figcaption>
                                <blockquote>
                                    <p className="text-lg advisor-para">
                                        “A qualified BS in Accounting from Saint John’s University, Mr. Grover brings in his extensive experience in various financial markets and capital markets. Mr. Grover was a partner in a CPA firm for fourteen years where he managed over 400 small to mid size businesses.”
                                    </p>
                                </blockquote>
                                <div className="block justify-center space-y-4 md:flex md:space-y-0 md:space-x-4">
                                    <button data-modal-target="large-modal" data-modal-toggle="large-modal" className="block w-full md:w-auto text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button">
                                        Read More
                                    </button>
                                </div>
                                <div id="large-modal" tabindex="-1" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                    <div className="relative w-full max-w-4xl max-h-full">

                                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <div className="flex text-center p-3 border-b rounded-t dark:border-gray-600">
                                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="large-modal">
                                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    <span className="sr-only">Close modal</span>
                                                </button>
                                            </div>

                                            <div className="p-6 space-y-6">
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    A qualified BS in Accounting from Saint John’s University, Mr. Grover brings in his extensive experience in various financial markets and capital markets. Mr. Grover was a partner in a CPA firm for fourteen years where he managed over 400 small to mid size businesses. He played a key role as a founder and CFO in building a highly successful company in the medical field based in New Jersey, which grew to over 140 employees, 11 offices across five States and revenues of over $8 million in two years.
                                                </p>
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    He managed relationships with over 110 physicians and 45 vendors. He raised over $5M of equity within nine months from concept inception.He negotiated with CMS (Medicare/Medicaid) and private insurance companies on payment terms etc. With an excellent ability to raise efficient capital to meet required project milestones and business requirements.

                                                </p>
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    His strengths include thoroughly understanding the business objectives prior to preparing financial budgets and projections. He has successfully raised over $90M for various projects over past 15 years. With a strong network of doctors, key opinion leaders, lenders, investors, highly specialized individuals in the medical/pharma industry and market makers, Mr. Grover is an asset to our group.
                                                </p>
                                            </div>

                                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                <button data-modal-hide="large-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </figure>
                    </div>
                    <div>
                        <figure className="rounded-xl p-4 wrapper">
                            <img className="w-24 h-24 rounded-full mx-auto" src={advisor6} alt="" style={{
                                width: "150px",
                                height: "150px"
                            }} />
                            <div className="pt-6 text-center space-y-4">
                                <figcaption className="text-lg">
                                    <div className="text-black">
                                        MR. CHIRAG MERCHANT
                                    </div>
                                    <div className="text-slate-700 dark:text-slate-500">
                                        CHIEF OPERATING OFFICER
                                    </div>
                                </figcaption>
                                <blockquote>
                                    <p className="text-lg advisor-para">
                                        “Chirag Merchant started his career in 1994 in an Equity Broking and Financial Consultancy firm and has been instrumental in setting up various business verticals. His last stint was with JM Financial Services Limited as a Private Banker.”
                                    </p>
                                </blockquote>
                                <div className="block justify-center space-y-4 md:flex md:space-y-0 md:space-x-4">
                                    <button data-modal-target="large-modal" data-modal-toggle="large-modal" className="block w-full md:w-auto text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button">
                                        Read More
                                    </button>
                                </div>
                                <div id="large-modal" tabindex="-1" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                    <div className="relative w-full max-w-4xl max-h-full">

                                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <div className="flex text-center p-3 border-b rounded-t dark:border-gray-600">
                                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="large-modal">
                                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    <span className="sr-only">Close modal</span>
                                                </button>
                                            </div>

                                            <div className="p-6 space-y-6">
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    Mr. Mahapatra has over 30 years’ of experience in assisting the US multinational companies in establishing strategies for their successful entry into the marketplace of India. Mr. Mahapatra, has significant success in winning over several billion dollar businesses opportunities in India in various sectors such as telecom, chemical, infrastructure including the FDI.
                                                </p>
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    Mr. Mahapatra is one of the co-founders of Quantum Technologies and Quantum Simulators Private Limited. His formal education includes Engineering, MBA and Law.


                                                </p>
                                            </div>

                                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                <button data-modal-hide="large-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </figure>
                    </div>
                    <div>
                        <figure className="rounded-xl p-4 wrapper">
                            <img className="w-24 h-24 rounded-full mx-auto" src={advisor7} alt="" style={{
                                width: "150px",
                                height: "150px"
                            }} />
                            <div className="pt-6 text-center space-y-4">
                                <figcaption className="text-lg">
                                    <div className="text-black">
                                        MR. PRABHUDAS NAMBIAR
                                    </div>
                                    <div className="text-slate-700 dark:text-slate-500">
                                        WHOLE TIME DIRECTOR
                                    </div>
                                </figcaption>
                                <blockquote>
                                    <p className="text-lg advisor-para">
                                        “A Masters degree in Accounting & Finance and with a global experience over 25 years in finance, Mr. Nambiar has served the Mahapatra Group from it's incorporation. Under the directives of Mr. Nambiar, the group has restructured it's strategies on financial.”
                                    </p>
                                </blockquote>
                                <div className="block justify-center space-y-4 md:flex md:space-y-0 md:space-x-4">
                                    <button data-modal-target="large-modal" data-modal-toggle="large-modal" className="block w-full md:w-auto text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button">
                                        Read More
                                    </button>
                                </div>
                                <div id="large-modal" tabindex="-1" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                    <div className="relative w-full max-w-4xl max-h-full">

                                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <div className="flex text-center p-3 border-b rounded-t dark:border-gray-600">
                                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="large-modal">
                                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    <span className="sr-only">Close modal</span>
                                                </button>
                                            </div>

                                            <div className="p-6 space-y-6">
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    Mr. Mahapatra has over 30 years’ of experience in assisting the US multinational companies in establishing strategies for their successful entry into the marketplace of India. Mr. Mahapatra, has significant success in winning over several billion dollar businesses opportunities in India in various sectors such as telecom, chemical, infrastructure including the FDI.
                                                </p>
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    Mr. Mahapatra is one of the co-founders of Quantum Technologies and Quantum Simulators Private Limited. His formal education includes Engineering, MBA and Law.


                                                </p>
                                            </div>

                                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                <button data-modal-hide="large-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </figure>
                    </div>
                    <div>
                        <figure className="rounded-xl p-4 wrapper">
                            <img className="w-24 h-24 rounded-full mx-auto" src={advisor8} alt="" style={{
                                width: "150px",
                                height: "150px"
                            }} />
                            <div className="pt-6 text-center space-y-4">
                                <figcaption className="text-lg">
                                    <div className="text-black">
                                        MR. MANOJ SHARMA
                                    </div>
                                    <div className="text-slate-700 dark:text-slate-500">
                                        DIRECTOR
                                    </div>
                                </figcaption>
                                <blockquote>
                                    <p className="text-lg advisor-para">
                                        “Being associated with Mahapatra Universal Limited since inception, Mr. Sharma(M.Com) is an expert on administration and operations of the group. Directing staff under his leadership qualities and coordinate activities of various businesses and departments.”
                                    </p>
                                </blockquote>
                                <div className="block justify-center space-y-4 md:flex md:space-y-0 md:space-x-4">
                                    <button data-modal-target="large-modal" data-modal-toggle="large-modal" className="block w-full md:w-auto text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button">
                                        Read More
                                    </button>
                                </div>
                                <div id="large-modal" tabindex="-1" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                    <div className="relative w-full max-w-4xl max-h-full">

                                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <div className="flex text-center p-3 border-b rounded-t dark:border-gray-600">
                                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="large-modal">
                                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    <span className="sr-only">Close modal</span>
                                                </button>
                                            </div>

                                            <div className="p-6 space-y-6">
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    Mr. Mahapatra has over 30 years’ of experience in assisting the US multinational companies in establishing strategies for their successful entry into the marketplace of India. Mr. Mahapatra, has significant success in winning over several billion dollar businesses opportunities in India in various sectors such as telecom, chemical, infrastructure including the FDI.
                                                </p>
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    Mr. Mahapatra is one of the co-founders of Quantum Technologies and Quantum Simulators Private Limited. His formal education includes Engineering, MBA and Law.


                                                </p>
                                            </div>

                                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                <button data-modal-hide="large-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </figure>
                    </div>

                </div>
            </section>
        </>
    )
}

export default BoardAdvisor