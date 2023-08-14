import React from "react";
import { Nav, Stack } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
const CarouselMini = () => {
  return (
    <>
      {/* <div className="container bg-danger"> */}
      {/* <div id="text-carousel" class="carousel slide" data-ride="carousel">
        <div class="row">
          <div class="col-xs-offset-3 col-xs-6">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="carousel-content">
                  <div>
                    <p>
                      Sapiente, ducimus, voluptas, mollitia voluptatibus nemo
                      explicabo sit blanditiis laborum dolore illum fuga veniam
                      quae expedita libero accusamus quas harum ex numquam
                      necessitatibus provident deleniti tenetur iusto officiis
                      recusandae corporis culpa quaerat?
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item ">
                <div class="carousel-content">
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Animi, sint fuga temporibus nam saepe delectus expedita
                      vitae magnam necessitatibus dolores tempore consequatur
                      dicta cumque repellendus eligendi ducimus placeat!{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item ">
                <div class="carousel-content">
                  <div>
                    <p>
                      Sapiente, ducimus, voluptas, mollitia voluptatibus nemo
                      explicabo sit blanditiis laborum dolore illum fuga veniam
                      quae expedita libero accusamus quas harum ex numquam
                      necessitatibus provident deleniti tenetur iusto officiis
                      recusandae corporis culpa quaerat?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#text-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#text-carousel"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div> */}

      {/* <style type="text/css">
    .img{
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        min-height:400px;
    }
</style> */}

      <div class="noticeBanner-wrapper">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block "
              src={"bg-carousel.avif"}
              alt="First slide"
              width={100}
            />
            <Carousel.Caption>
              <div className="d-flex">
                <Stack direction="horizontal" gap={3}>
                  <div className="p-2">
                    <h4>RFP call for AML/CFT Expert or Consultant </h4>
                  </div>
                  <div className="p-2 ms-auto">
                    <Nav.Link href="https://www.nabilbank.com/individuals/notices/account-freeze-notice-for-dormant-accounts-for-10-years-and-above">
                      Read More
                    </Nav.Link>
                  </div>
                  <div className="vr" />
                  <div className="p-2">
                    <h4>Email the details</h4>
                  </div>
                </Stack>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block"
              src={"bg-carousel.avif"}
              alt="First slide"
              width={100}
            />
            <Carousel.Caption>
              <div className="d-flex">
                <Stack direction="horizontal" gap={3}>
                  <div className="p-2">
                    <h4>RFP call for AML/CFT Expert or Consultant </h4>
                  </div>
                  <div className="p-2 ms-auto">
                    <Nav.Link href="https://www.nabilbank.com/individuals/notices/account-freeze-notice-for-dormant-accounts-for-10-years-and-above">
                      Read More
                    </Nav.Link>
                  </div>
                  <div className="vr" />
                  <div className="p-2">
                    <h4>Email the details</h4>
                  </div>
                </Stack>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              src={"bg-carousel.avif"}
              alt="First slide"
              width={100}
            />
            <Carousel.Caption>
              <div className="d-flex">
                <Stack direction="horizontal" gap={3}>
                  <div className="p-2">
                    <h4>RFP call for AML/CFT Expert or Consultant </h4>
                  </div>
                  <div className="p-2 ms-auto">
                    <Nav.Link href="https://www.nabilbank.com/individuals/notices/account-freeze-notice-for-dormant-accounts-for-10-years-and-above">
                      Read More
                    </Nav.Link>
                  </div>
                  <div className="vr" />
                  <div className="p-2">
                    <h4>Email the details</h4>
                  </div>
                </Stack>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};
{
  /* </div> */
}

//   <div class="noticeBanner-wrapper">
//     <div class="container position-relative">
//       <div class="slick-slider pr-4 slick-initialized" dir="ltr">
//         <div class="slick-list">
//           <div
//             class="slick-track"
//             style={{
//               width: "8154px",
//               opacity: "1",
//               transform: "translate3d(-2718px, 0px, 0px)",
//             }}
//           >
//             <div
//               data-index="-1"
//               tabindex="-1"
//               class="slick-slide slick-cloned"
//               aria-hidden="true"
//               style="width: 906px;"
//             >
//               <div>
//                 <h5
//                   class="d-flex justify-content-between text-white mb-0 align-items-start align-items-md-center flex-column flex-md-row"
//                   tabindex="-1"
//                   style={{width: "100%", display: "inline-block"}}
//                 >
//                   <span>Cyber Security Awareness Notice</span>
//                   <div class="noticeBanner-linkWrapper">
//                     <a href="/individual/notices/cyber-security-awareness-notice">
//                       Read More
//                     </a>
//                     <a role="button" class="px-2">
//                       Email the details
//                     </a>
//                   </div>
//                 </h5>
//               </div>
//             </div>
//             <div
//               data-index="0"
//               class="slick-slide"
//               tabindex="-1"
//               aria-hidden="true"
//               style="outline: none; width: 906px;"
//             >
//               <div>
//                 <h5
//                   class="d-flex justify-content-between text-white mb-0 align-items-start align-items-md-center flex-column flex-md-row"
//                   tabindex="-1"
//                   style="width: 100%; display: inline-block;"
//                 >
//                   <span>RFP Call for AML/CFT Expert or Consultant</span>
//                   <div class="noticeBanner-linkWrapper">
//                     <a href="/individual/">Read More</a>
//                     <a role="button" class="px-2">
//                       Email the details
//                     </a>
//                   </div>
//                 </h5>
//               </div>
//             </div>
//             <div
//               data-index="1"
//               class="slick-slide"
//               tabindex="-1"
//               aria-hidden="true"
//               style="outline: none; width: 906px;"
//             >
//               <div>
//                 <h5
//                   class="d-flex justify-content-between text-white mb-0 align-items-start align-items-md-center flex-column flex-md-row"
//                   tabindex="-1"
//                   style="width: 100%; display: inline-block;"
//                 >
//                   <span>RFP Call for AML/CFT Expert or Consultant</span>
//                   <div class="noticeBanner-linkWrapper">
//                     <a href="/individual/">Read More</a>
//                     <a role="button" class="px-2">
//                       Email the details
//                     </a>
//                   </div>
//                 </h5>
//               </div>
//             </div>
//             <div
//               data-index="2"
//               class="slick-slide slick-active slick-current"
//               tabindex="-1"
//               aria-hidden="false"
//               style="outline: none; width: 906px;"
//             >
//               <div>
//                 <h5
//                   class="d-flex justify-content-between text-white mb-0 align-items-start align-items-md-center flex-column flex-md-row"
//                   tabindex="-1"
//                   style="width: 100%; display: inline-block;"
//                 >
//                   <span>
//                     Account Freeze Notice for Dormant Account of 10 Years
//                     &amp; Above
//                   </span>
//                   <div class="noticeBanner-linkWrapper">
//                     <a href="/individuals/notices/account-freeze-notice-for-dormant-accounts-for-10-years-and-above">
//                       Read More
//                     </a>
//                     <a role="button" class="px-2">
//                       Email the details
//                     </a>
//                   </div>
//                 </h5>
//               </div>
//             </div>
//             <div
//               data-index="3"
//               class="slick-slide"
//               tabindex="-1"
//               aria-hidden="true"
//               style="outline: none; width: 906px;"
//             >
//               <div>
//                 <h5
//                   class="d-flex justify-content-between text-white mb-0 align-items-start align-items-md-center flex-column flex-md-row"
//                   tabindex="-1"
//                   style="width: 100%; display: inline-block;"
//                 >
//                   <span>Cyber Security Awareness Notice</span>
//                   <div class="noticeBanner-linkWrapper">
//                     <a href="/individual/notices/cyber-security-awareness-notice">
//                       Read More
//                     </a>
//                     <a role="button" class="px-2">
//                       Email the details
//                     </a>
//                   </div>
//                 </h5>
//               </div>
//             </div>
//             <div
//               data-index="4"
//               tabindex="-1"
//               class="slick-slide slick-cloned"
//               aria-hidden="true"
//               style="width: 906px;"
//             >
//               <div>
//                 <h5
//                   class="d-flex justify-content-between text-white mb-0 align-items-start align-items-md-center flex-column flex-md-row"
//                   tabindex="-1"
//                   style="width: 100%; display: inline-block;"
//                 >
//                   <span>RFP Call for AML/CFT Expert or Consultant</span>
//                   <div class="noticeBanner-linkWrapper">
//                     <a href="/individual/">Read More</a>
//                     <a role="button" class="px-2">
//                       Email the details
//                     </a>
//                   </div>
//                 </h5>
//               </div>
//             </div>
//             <div
//               data-index="5"
//               tabindex="-1"
//               class="slick-slide slick-cloned"
//               aria-hidden="true"
//               style="width: 906px;"
//             >
//               <div>
//                 <h5
//                   class="d-flex justify-content-between text-white mb-0 align-items-start align-items-md-center flex-column flex-md-row"
//                   tabindex="-1"
//                   style="width: 100%; display: inline-block;"
//                 >
//                   <span>RFP Call for AML/CFT Expert or Consultant</span>
//                   <div class="noticeBanner-linkWrapper">
//                     <a href="/individual/">Read More</a>
//                     <a role="button" class="px-2">
//                       Email the details
//                     </a>
//                   </div>
//                 </h5>
//               </div>
//             </div>
//             <div
//               data-index="6"
//               tabindex="-1"
//               class="slick-slide slick-cloned"
//               aria-hidden="true"
//               style="width: 906px;"
//             >
//               <div>
//                 <h5
//                   class="d-flex justify-content-between text-white mb-0 align-items-start align-items-md-center flex-column flex-md-row"
//                   tabindex="-1"
//                   style="width: 100%; display: inline-block;"
//                 >
//                   <span>
//                     Account Freeze Notice for Dormant Account of 10 Years
//                     &amp; Above
//                   </span>
//                   <div class="noticeBanner-linkWrapper">
//                     <a href="/individuals/notices/account-freeze-notice-for-dormant-accounts-for-10-years-and-above">
//                       Read More
//                     </a>
//                     <a role="button" class="px-2">
//                       Email the details
//                     </a>
//                   </div>
//                 </h5>
//               </div>
//             </div>
//             <div
//               data-index="7"
//               tabindex="-1"
//               class="slick-slide slick-cloned"
//               aria-hidden="true"
//               style="width: 906px;"
//             >
//               <div>
//                 <h5
//                   class="d-flex justify-content-between text-white mb-0 align-items-start align-items-md-center flex-column flex-md-row"
//                   tabindex="-1"
//                   style="width: 100%; display: inline-block;"
//                 >
//                   <span>Cyber Security Awareness Notice</span>
//                   <div class="noticeBanner-linkWrapper">
//                     <a href="/individual/notices/cyber-security-awareness-notice">
//                       Read More
//                     </a>
//                     <a role="button" class="px-2">
//                       Email the details
//                     </a>
//                   </div>
//                 </h5>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <svg
//         stroke="currentColor"
//         fill="currentColor"
//         stroke-width="0"
//         viewBox="0 0 1024 1024"
//         role="button"
//         class="text-white h4 notice-close-btn"
//         height="1em"
//         width="1em"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
//       </svg>
//     </div>
//   </div>

export default CarouselMini;
