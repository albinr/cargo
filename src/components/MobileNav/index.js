import React from "react";

import * as ROUTES from "../../constants/routes";

import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavLinks,
  NavItem,
} from "./MobileNav.style";

export const MobileNav = () => (
  <>
    <Nav>
      <NavbarContainer>
        <NavMenu>
          <NavItem>
            <NavLinks to={ROUTES.FILTER}>
              <svg
                width="86"
                height="67"
                viewBox="0 0 86 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_89:253)">
                  <path
                    d="M11.216 58.16C10.352 58.16 9.54133 57.9947 8.784 57.664C8.03733 57.3333 7.376 56.8747 6.8 56.288C6.23467 55.6907 5.792 55.008 5.472 54.24C5.152 53.4613 4.992 52.6293 4.992 51.744C4.992 50.8693 5.14667 50.048 5.456 49.28C5.776 48.5013 6.21867 47.8187 6.784 47.232C7.36 46.6453 8.02133 46.1867 8.768 45.856C9.52533 45.5147 10.3413 45.344 11.216 45.344C11.984 45.344 12.6827 45.456 13.312 45.68C13.9413 45.904 14.5493 46.2613 15.136 46.752C15.2747 46.8587 15.3333 46.9973 15.312 47.168C15.2907 47.328 15.2107 47.44 15.072 47.504C15.04 47.632 14.9387 47.712 14.768 47.744C14.608 47.776 14.448 47.728 14.288 47.6C13.872 47.2373 13.4187 46.9707 12.928 46.8C12.4373 46.6187 11.8667 46.528 11.216 46.528C10.5227 46.528 9.872 46.6667 9.264 46.944C8.66667 47.2213 8.13867 47.6 7.68 48.08C7.22133 48.56 6.85867 49.1147 6.592 49.744C6.336 50.3733 6.208 51.04 6.208 51.744C6.208 52.4693 6.336 53.1467 6.592 53.776C6.85867 54.4053 7.22133 54.96 7.68 55.44C8.13867 55.92 8.66667 56.2987 9.264 56.576C9.872 56.8427 10.5227 56.976 11.216 56.976C12.368 56.976 13.4187 56.6027 14.368 55.856C14.56 55.7067 14.7627 55.6853 14.976 55.792C15.2 55.8987 15.312 56.08 15.312 56.336C15.312 56.5067 15.2533 56.656 15.136 56.784C14.592 57.2853 13.984 57.6427 13.312 57.856C12.64 58.0587 11.9413 58.16 11.216 58.16ZM21.1591 58.08C20.3378 58.08 19.6018 57.888 18.9511 57.504C18.3005 57.1093 17.7831 56.576 17.3991 55.904C17.0258 55.232 16.8391 54.4747 16.8391 53.632C16.8391 52.7787 17.0311 52.016 17.4151 51.344C17.8098 50.672 18.3431 50.144 19.0151 49.76C19.6871 49.3653 20.4445 49.168 21.2871 49.168C22.1298 49.168 22.8818 49.3653 23.5431 49.76C24.2151 50.144 24.7431 50.672 25.1271 51.344C25.5218 52.016 25.7245 52.7787 25.7351 53.632V57.392C25.7351 57.5733 25.6765 57.7227 25.5591 57.84C25.4418 57.9467 25.2925 58 25.1111 58C24.9298 58 24.7805 57.9467 24.6631 57.84C24.5458 57.7227 24.4871 57.5733 24.4871 57.392V56.416C24.1245 56.928 23.6551 57.3333 23.0791 57.632C22.5031 57.9307 21.8631 58.08 21.1591 58.08ZM21.2871 56.96C21.9058 56.96 22.4551 56.816 22.9351 56.528C23.4258 56.24 23.8098 55.8453 24.0871 55.344C24.3751 54.832 24.5191 54.2613 24.5191 53.632C24.5191 52.992 24.3751 52.4213 24.0871 51.92C23.8098 51.4187 23.4258 51.024 22.9351 50.736C22.4551 50.4373 21.9058 50.288 21.2871 50.288C20.6791 50.288 20.1298 50.4373 19.6391 50.736C19.1485 51.024 18.7591 51.4187 18.4711 51.92C18.1831 52.4213 18.0391 52.992 18.0391 53.632C18.0391 54.2613 18.1831 54.832 18.4711 55.344C18.7591 55.8453 19.1485 56.24 19.6391 56.528C20.1298 56.816 20.6791 56.96 21.2871 56.96ZM30.1792 58C29.5392 58 29.0112 57.744 28.5952 57.232C28.1792 56.7093 27.9712 56.0427 27.9712 55.232V46.112C27.9712 45.9307 28.0246 45.7867 28.1312 45.68C28.2486 45.5627 28.3979 45.504 28.5792 45.504C28.7606 45.504 28.9046 45.5627 29.0112 45.68C29.1286 45.7867 29.1872 45.9307 29.1872 46.112V55.232C29.1872 55.6907 29.2779 56.064 29.4592 56.352C29.6512 56.64 29.8912 56.784 30.1792 56.784H30.5792C30.7392 56.784 30.8672 56.8427 30.9632 56.96C31.0592 57.0667 31.1072 57.2107 31.1072 57.392C31.1072 57.5733 31.0379 57.7227 30.8993 57.84C30.7712 57.9467 30.6006 58 30.3872 58H30.1792ZM36.4505 58.08C35.5865 58.08 34.8185 57.8933 34.1465 57.52C33.4852 57.136 32.9625 56.608 32.5785 55.936C32.2052 55.264 32.0185 54.496 32.0185 53.632C32.0185 52.7573 32.1945 51.9893 32.5465 51.328C32.9092 50.656 33.4052 50.128 34.0345 49.744C34.6638 49.36 35.3892 49.168 36.2105 49.168C37.0212 49.168 37.7252 49.3547 38.3225 49.728C38.9305 50.0907 39.3998 50.5973 39.7305 51.248C40.0612 51.8987 40.2265 52.64 40.2265 53.472C40.2265 53.6427 40.1732 53.7813 40.0665 53.888C39.9598 53.984 39.8212 54.032 39.6505 54.032H33.1865C33.2505 54.608 33.4265 55.12 33.7145 55.568C34.0025 56.0053 34.3812 56.352 34.8505 56.608C35.3198 56.8533 35.8532 56.976 36.4505 56.976C36.8345 56.976 37.2185 56.912 37.6025 56.784C37.9972 56.6453 38.3118 56.4747 38.5465 56.272C38.6638 56.176 38.7972 56.128 38.9465 56.128C39.0958 56.1173 39.2238 56.1547 39.3305 56.24C39.4692 56.368 39.5385 56.5067 39.5385 56.656C39.5492 56.8053 39.4905 56.9333 39.3625 57.04C39.0105 57.3387 38.5625 57.5893 38.0185 57.792C37.4745 57.984 36.9518 58.08 36.4505 58.08ZM36.2105 50.272C35.3892 50.272 34.7118 50.528 34.1785 51.04C33.6452 51.5413 33.3252 52.1973 33.2185 53.008H39.0745C38.9892 52.1973 38.6905 51.5413 38.1785 51.04C37.6772 50.528 37.0212 50.272 36.2105 50.272ZM43.0946 58C42.9026 58 42.748 57.9467 42.6306 57.84C42.524 57.7227 42.4706 57.5733 42.4706 57.392V49.872C42.4706 49.68 42.524 49.5307 42.6306 49.424C42.748 49.3067 42.9026 49.248 43.0946 49.248C43.276 49.248 43.42 49.3067 43.5266 49.424C43.644 49.5307 43.7026 49.68 43.7026 49.872V50.416C44.044 50.0213 44.4653 49.712 44.9666 49.488C45.4786 49.264 46.028 49.152 46.6146 49.152C47.372 49.152 48.0493 49.312 48.6466 49.632C49.244 49.9413 49.7133 50.4 50.0546 51.008C50.4066 51.616 50.5826 52.3573 50.5826 53.232V57.392C50.5826 57.5627 50.524 57.7067 50.4066 57.824C50.2893 57.9413 50.1453 58 49.9746 58C49.7933 58 49.644 57.9413 49.5266 57.824C49.4093 57.7067 49.3506 57.5627 49.3506 57.392V53.232C49.3506 52.24 49.0733 51.5093 48.5186 51.04C47.9746 50.56 47.2973 50.32 46.4866 50.32C45.964 50.32 45.4893 50.4213 45.0626 50.624C44.6466 50.8267 44.316 51.104 44.0706 51.456C43.8253 51.808 43.7026 52.208 43.7026 52.656V57.392C43.7026 57.5733 43.644 57.7227 43.5266 57.84C43.42 57.9467 43.276 58 43.0946 58ZM57.4427 58.08C56.6001 58.08 55.8427 57.888 55.1707 57.504C54.4987 57.1093 53.9654 56.576 53.5707 55.904C53.1867 55.232 52.9947 54.4693 52.9947 53.616C52.9947 52.7733 53.1814 52.016 53.5547 51.344C53.9387 50.672 54.4561 50.144 55.1067 49.76C55.7574 49.3653 56.4934 49.168 57.3147 49.168C58.0294 49.168 58.6747 49.3227 59.2507 49.632C59.8267 49.9307 60.2907 50.3307 60.6427 50.832V46.128C60.6427 45.936 60.7014 45.7867 60.8187 45.68C60.9361 45.5627 61.0854 45.504 61.2667 45.504C61.4481 45.504 61.5974 45.5627 61.7147 45.68C61.8321 45.7867 61.8907 45.936 61.8907 46.128V53.68C61.8694 54.512 61.6614 55.264 61.2667 55.936C60.8827 56.5973 60.3547 57.12 59.6827 57.504C59.0214 57.888 58.2747 58.08 57.4427 58.08ZM57.4427 56.96C58.0614 56.96 58.6107 56.816 59.0907 56.528C59.5814 56.2293 59.9654 55.8293 60.2427 55.328C60.5307 54.8267 60.6747 54.256 60.6747 53.616C60.6747 52.9867 60.5307 52.4213 60.2427 51.92C59.9654 51.408 59.5814 51.008 59.0907 50.72C58.6107 50.432 58.0614 50.288 57.4427 50.288C56.8347 50.288 56.2854 50.432 55.7947 50.72C55.3041 51.008 54.9147 51.408 54.6267 51.92C54.3387 52.4213 54.1947 52.9867 54.1947 53.616C54.1947 54.256 54.3387 54.8267 54.6267 55.328C54.9147 55.8293 55.3041 56.2293 55.7947 56.528C56.2854 56.816 56.8347 56.96 57.4427 56.96ZM68.7872 58.08C67.9659 58.08 67.2299 57.888 66.5792 57.504C65.9286 57.1093 65.4112 56.576 65.0272 55.904C64.6539 55.232 64.4672 54.4747 64.4672 53.632C64.4672 52.7787 64.6592 52.016 65.0432 51.344C65.4379 50.672 65.9712 50.144 66.6432 49.76C67.3152 49.3653 68.0726 49.168 68.9152 49.168C69.7579 49.168 70.5099 49.3653 71.1712 49.76C71.8432 50.144 72.3712 50.672 72.7552 51.344C73.1499 52.016 73.3526 52.7787 73.3632 53.632V57.392C73.3632 57.5733 73.3046 57.7227 73.1872 57.84C73.0699 57.9467 72.9206 58 72.7392 58C72.5579 58 72.4086 57.9467 72.2912 57.84C72.1739 57.7227 72.1152 57.5733 72.1152 57.392V56.416C71.7526 56.928 71.2832 57.3333 70.7072 57.632C70.1312 57.9307 69.4912 58.08 68.7872 58.08ZM68.9152 56.96C69.5339 56.96 70.0832 56.816 70.5632 56.528C71.0539 56.24 71.4379 55.8453 71.7152 55.344C72.0032 54.832 72.1472 54.2613 72.1472 53.632C72.1472 52.992 72.0032 52.4213 71.7152 51.92C71.4379 51.4187 71.0539 51.024 70.5632 50.736C70.0832 50.4373 69.5339 50.288 68.9152 50.288C68.3072 50.288 67.7579 50.4373 67.2672 50.736C66.7766 51.024 66.3872 51.4187 66.0992 51.92C65.8112 52.4213 65.6672 52.992 65.6672 53.632C65.6672 54.2613 65.8112 54.832 66.0992 55.344C66.3872 55.8453 66.7766 56.24 67.2672 56.528C67.7579 56.816 68.3072 56.96 68.9152 56.96ZM76.5274 58C76.122 58 75.9194 57.7973 75.9194 57.392V49.856C75.9194 49.4507 76.122 49.248 76.5274 49.248C76.9327 49.248 77.1354 49.4507 77.1354 49.856V50.544C77.4554 50.1173 77.85 49.7813 78.3194 49.536C78.7887 49.28 79.306 49.152 79.8714 49.152C80.362 49.152 80.7407 49.2213 81.0074 49.36C81.274 49.4987 81.3754 49.7013 81.3114 49.968C81.258 50.2133 81.13 50.3413 80.9274 50.352C80.7354 50.352 80.506 50.3413 80.2394 50.32C79.642 50.2667 79.1087 50.3307 78.6394 50.512C78.1807 50.6827 77.8127 50.9493 77.5354 51.312C77.2687 51.6747 77.1354 52.1067 77.1354 52.608V57.392C77.1354 57.7973 76.9327 58 76.5274 58Z"
                    fill="white"
                  />
                </g>
                <g filter="url(#filter1_d_89:253)">
                  <path
                    d="M55.8 3.27273H54.2V0H51V3.27273H35V0H31.8V3.27273H30.2C28.44 3.27273 27 4.74545 27 6.54545V32.7273C27 34.5273 28.44 36 30.2 36H55.8C57.56 36 59 34.5273 59 32.7273V6.54545C59 4.74545 57.56 3.27273 55.8 3.27273ZM55.8 32.7273H30.2V11.4545H55.8V32.7273Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_89:253"
                    x="0.991943"
                    y="45.344"
                    width="84.4155"
                    height="20.816"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_89:253"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_89:253"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_89:253"
                    x="23"
                    y="0"
                    width="40"
                    height="44"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_89:253"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_89:253"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to={ROUTES.RENTOUT}>
              <svg
                width="51"
                height="69"
                viewBox="0 0 51 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_89:252)">
                  <path
                    d="M5.912 60C5.66667 60 5.49067 59.8987 5.384 59.696C5.27733 59.4933 5.26667 59.296 5.352 59.104L10.056 47.936C10.1733 47.648 10.376 47.504 10.664 47.504C10.9413 47.504 11.1387 47.648 11.256 47.936L15.976 59.12C16.072 59.3227 16.056 59.52 15.928 59.712C15.8107 59.904 15.64 60 15.416 60C15.128 60 14.9307 59.872 14.824 59.616L13.768 57.024H7.56L6.488 59.616C6.43467 59.744 6.35467 59.84 6.248 59.904C6.152 59.968 6.04 60 5.912 60ZM8.008 55.952H13.32L10.664 49.536L8.008 55.952ZM21.5215 60.08C20.6788 60.08 19.9215 59.888 19.2495 59.504C18.5775 59.1093 18.0442 58.576 17.6495 57.904C17.2655 57.232 17.0735 56.4693 17.0735 55.616C17.0735 54.7733 17.2602 54.016 17.6335 53.344C18.0175 52.672 18.5348 52.144 19.1855 51.76C19.8362 51.3653 20.5722 51.168 21.3935 51.168C22.1082 51.168 22.7535 51.3227 23.3295 51.632C23.9055 51.9307 24.3695 52.3307 24.7215 52.832V48.128C24.7215 47.936 24.7802 47.7867 24.8975 47.68C25.0148 47.5627 25.1642 47.504 25.3455 47.504C25.5268 47.504 25.6762 47.5627 25.7935 47.68C25.9108 47.7867 25.9695 47.936 25.9695 48.128V55.68C25.9482 56.512 25.7402 57.264 25.3455 57.936C24.9615 58.5973 24.4335 59.12 23.7615 59.504C23.1002 59.888 22.3535 60.08 21.5215 60.08ZM21.5215 58.96C22.1402 58.96 22.6895 58.816 23.1695 58.528C23.6602 58.2293 24.0442 57.8293 24.3215 57.328C24.6095 56.8267 24.7535 56.256 24.7535 55.616C24.7535 54.9867 24.6095 54.4213 24.3215 53.92C24.0442 53.408 23.6602 53.008 23.1695 52.72C22.6895 52.432 22.1402 52.288 21.5215 52.288C20.9135 52.288 20.3642 52.432 19.8735 52.72C19.3828 53.008 18.9935 53.408 18.7055 53.92C18.4175 54.4213 18.2735 54.9867 18.2735 55.616C18.2735 56.256 18.4175 56.8267 18.7055 57.328C18.9935 57.8293 19.3828 58.2293 19.8735 58.528C20.3642 58.816 20.9135 58.96 21.5215 58.96ZM32.994 60.08C32.1513 60.08 31.394 59.888 30.722 59.504C30.05 59.1093 29.5167 58.576 29.122 57.904C28.738 57.232 28.546 56.4693 28.546 55.616C28.546 54.7733 28.7327 54.016 29.106 53.344C29.49 52.672 30.0073 52.144 30.658 51.76C31.3087 51.3653 32.0447 51.168 32.866 51.168C33.5807 51.168 34.226 51.3227 34.802 51.632C35.378 51.9307 35.842 52.3307 36.194 52.832V48.128C36.194 47.936 36.2527 47.7867 36.37 47.68C36.4873 47.5627 36.6367 47.504 36.818 47.504C36.9993 47.504 37.1487 47.5627 37.266 47.68C37.3833 47.7867 37.442 47.936 37.442 48.128V55.68C37.4207 56.512 37.2127 57.264 36.818 57.936C36.434 58.5973 35.906 59.12 35.234 59.504C34.5727 59.888 33.826 60.08 32.994 60.08ZM32.994 58.96C33.6127 58.96 34.162 58.816 34.642 58.528C35.1327 58.2293 35.5167 57.8293 35.794 57.328C36.082 56.8267 36.226 56.256 36.226 55.616C36.226 54.9867 36.082 54.4213 35.794 53.92C35.5167 53.408 35.1327 53.008 34.642 52.72C34.162 52.432 33.6127 52.288 32.994 52.288C32.386 52.288 31.8367 52.432 31.346 52.72C30.8553 53.008 30.466 53.408 30.178 53.92C29.89 54.4213 29.746 54.9867 29.746 55.616C29.746 56.256 29.89 56.8267 30.178 57.328C30.466 57.8293 30.8553 58.2293 31.346 58.528C31.8367 58.816 32.386 58.96 32.994 58.96Z"
                    fill="white"
                  />
                </g>
                <g filter="url(#filter1_d_89:252)">
                  <path
                    d="M38.3571 17.5357H26.4643V5.64286C26.4643 4.1835 25.2808 3 23.8214 3H21.1786C19.7192 3 18.5357 4.1835 18.5357 5.64286V17.5357H6.64286C5.1835 17.5357 4 18.7192 4 20.1786V22.8214C4 24.2808 5.1835 25.4643 6.64286 25.4643H18.5357V37.3571C18.5357 38.8165 19.7192 40 21.1786 40H23.8214C25.2808 40 26.4643 38.8165 26.4643 37.3571V25.4643H38.3571C39.8165 25.4643 41 24.2808 41 22.8214V20.1786C41 18.7192 39.8165 17.5357 38.3571 17.5357Z"
                    fill="white"
                  />
                </g>
                <g filter="url(#filter2_d_89:252)">
                  <path
                    d="M45.2667 0.820625C45.1 0.34125 44.6333 0 44.0833 0H34.9167C34.3667 0 33.9083 0.34125 33.7333 0.820625L32 5.6875V12.1875C32 12.6344 32.375 13 32.8333 13H33.6667C34.125 13 34.5 12.6344 34.5 12.1875V11.375H44.5V12.1875C44.5 12.6344 44.875 13 45.3333 13H46.1667C46.625 13 47 12.6344 47 12.1875V5.6875L45.2667 0.820625ZM34.9167 8.9375C34.225 8.9375 33.6667 8.39312 33.6667 7.71875C33.6667 7.04437 34.225 6.5 34.9167 6.5C35.6083 6.5 36.1667 7.04437 36.1667 7.71875C36.1667 8.39312 35.6083 8.9375 34.9167 8.9375ZM44.0833 8.9375C43.3917 8.9375 42.8333 8.39312 42.8333 7.71875C42.8333 7.04437 43.3917 6.5 44.0833 6.5C44.775 6.5 45.3333 7.04437 45.3333 7.71875C45.3333 8.39312 44.775 8.9375 44.0833 8.9375ZM33.6667 4.875L34.9167 1.21875H44.0833L45.3333 4.875H33.6667Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_89:252"
                    x="1.22412"
                    y="47.504"
                    width="40.2178"
                    height="20.576"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_89:252"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_89:252"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_89:252"
                    x="0"
                    y="3"
                    width="45"
                    height="45"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_89:252"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_89:252"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_89:252"
                    x="28"
                    y="0"
                    width="23"
                    height="21"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_89:252"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_89:252"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to={ROUTES.ACCOUNT}>
              <svg
                width="78"
                height="67"
                viewBox="0 0 78 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_89:254)">
                  <path
                    d="M39 0C27.96 0 19 8.96 19 20C19 31.04 27.96 40 39 40C50.04 40 59 31.04 59 20C59 8.96 50.04 0 39 0ZM39 6C42.32 6 45 8.68 45 12C45 15.32 42.32 18 39 18C35.68 18 33 15.32 33 12C33 8.68 35.68 6 39 6ZM39 34.4C34 34.4 29.58 31.84 27 27.96C27.06 23.98 35 21.8 39 21.8C42.98 21.8 50.94 23.98 51 27.96C48.42 31.84 44 34.4 39 34.4Z"
                    fill="white"
                  />
                </g>
                <g filter="url(#filter1_d_89:254)">
                  <path
                    d="M4.912 58C4.66667 58 4.49067 57.8987 4.384 57.696C4.27733 57.4933 4.26667 57.296 4.352 57.104L9.056 45.936C9.17333 45.648 9.376 45.504 9.664 45.504C9.94133 45.504 10.1387 45.648 10.256 45.936L14.976 57.12C15.072 57.3227 15.056 57.52 14.928 57.712C14.8107 57.904 14.64 58 14.416 58C14.128 58 13.9307 57.872 13.824 57.616L12.768 55.024H6.56L5.488 57.616C5.43467 57.744 5.35467 57.84 5.248 57.904C5.152 57.968 5.04 58 4.912 58ZM7.008 53.952H12.32L9.664 47.536L7.008 53.952ZM20.4415 58.08C19.5988 58.08 18.8468 57.888 18.1855 57.504C17.5348 57.1093 17.0175 56.576 16.6335 55.904C16.2602 55.232 16.0735 54.4747 16.0735 53.632C16.0735 52.7787 16.2548 52.016 16.6175 51.344C16.9802 50.672 17.4762 50.144 18.1055 49.76C18.7348 49.3653 19.4602 49.168 20.2815 49.168C21.6148 49.168 22.6975 49.68 23.5295 50.704C23.6468 50.832 23.6895 50.9707 23.6575 51.12C23.6255 51.2587 23.5348 51.3813 23.3855 51.488C23.2682 51.5733 23.1348 51.6053 22.9855 51.584C22.8468 51.552 22.7242 51.472 22.6175 51.344C21.9988 50.64 21.2202 50.288 20.2815 50.288C19.6842 50.288 19.1562 50.432 18.6975 50.72C18.2495 51.008 17.8975 51.4027 17.6415 51.904C17.3962 52.4053 17.2735 52.9813 17.2735 53.632C17.2735 54.272 17.4068 54.8427 17.6735 55.344C17.9402 55.8453 18.3135 56.24 18.7935 56.528C19.2735 56.816 19.8228 56.96 20.4415 56.96C21.2948 56.96 21.9828 56.7307 22.5055 56.272C22.6335 56.1653 22.7668 56.1067 22.9055 56.096C23.0442 56.0853 23.1722 56.128 23.2895 56.224C23.4175 56.3413 23.4868 56.4747 23.4975 56.624C23.5188 56.7733 23.4708 56.9013 23.3535 57.008C22.5748 57.7227 21.6042 58.08 20.4415 58.08ZM30.1328 58.08C29.2901 58.08 28.5381 57.888 27.8767 57.504C27.2261 57.1093 26.7087 56.576 26.3247 55.904C25.9514 55.232 25.7647 54.4747 25.7647 53.632C25.7647 52.7787 25.9461 52.016 26.3087 51.344C26.6714 50.672 27.1674 50.144 27.7967 49.76C28.4261 49.3653 29.1514 49.168 29.9727 49.168C31.3061 49.168 32.3888 49.68 33.2207 50.704C33.3381 50.832 33.3808 50.9707 33.3488 51.12C33.3167 51.2587 33.2261 51.3813 33.0767 51.488C32.9594 51.5733 32.8261 51.6053 32.6768 51.584C32.5381 51.552 32.4154 51.472 32.3088 51.344C31.6901 50.64 30.9114 50.288 29.9727 50.288C29.3754 50.288 28.8474 50.432 28.3887 50.72C27.9407 51.008 27.5887 51.4027 27.3327 51.904C27.0874 52.4053 26.9647 52.9813 26.9647 53.632C26.9647 54.272 27.0981 54.8427 27.3647 55.344C27.6314 55.8453 28.0047 56.24 28.4847 56.528C28.9647 56.816 29.5141 56.96 30.1328 56.96C30.9861 56.96 31.6741 56.7307 32.1968 56.272C32.3248 56.1653 32.4581 56.1067 32.5968 56.096C32.7354 56.0853 32.8634 56.128 32.9808 56.224C33.1088 56.3413 33.1781 56.4747 33.1888 56.624C33.2101 56.7733 33.1621 56.9013 33.0448 57.008C32.2661 57.7227 31.2954 58.08 30.1328 58.08ZM39.904 58.08C39.0507 58.08 38.288 57.888 37.616 57.504C36.944 57.12 36.416 56.592 36.032 55.92C35.648 55.248 35.456 54.4853 35.456 53.632C35.456 52.768 35.648 52 36.032 51.328C36.416 50.656 36.944 50.128 37.616 49.744C38.288 49.36 39.0507 49.168 39.904 49.168C40.7573 49.168 41.5147 49.36 42.176 49.744C42.848 50.128 43.376 50.656 43.76 51.328C44.144 52 44.3413 52.768 44.352 53.632C44.352 54.4853 44.1547 55.248 43.76 55.92C43.376 56.592 42.848 57.12 42.176 57.504C41.5147 57.888 40.7573 58.08 39.904 58.08ZM39.904 56.96C40.5227 56.96 41.0773 56.816 41.568 56.528C42.0587 56.24 42.4427 55.8453 42.72 55.344C42.9973 54.8427 43.136 54.272 43.136 53.632C43.136 52.992 42.9973 52.4213 42.72 51.92C42.4427 51.408 42.0587 51.008 41.568 50.72C41.0773 50.432 40.5227 50.288 39.904 50.288C39.2853 50.288 38.7307 50.432 38.24 50.72C37.7493 51.008 37.36 51.408 37.072 51.92C36.7947 52.4213 36.656 52.992 36.656 53.632C36.656 54.272 36.7947 54.8427 37.072 55.344C37.36 55.8453 37.7493 56.24 38.24 56.528C38.7307 56.816 39.2853 56.96 39.904 56.96ZM50.7161 58.096C49.9588 58.096 49.2815 57.9413 48.6841 57.632C48.0868 57.312 47.6121 56.848 47.2601 56.24C46.9188 55.632 46.7481 54.8907 46.7481 54.016V49.856C46.7481 49.6853 46.8068 49.5413 46.9241 49.424C47.0415 49.3067 47.1855 49.248 47.3561 49.248C47.5375 49.248 47.6868 49.3067 47.8041 49.424C47.9215 49.5413 47.9801 49.6853 47.9801 49.856V54.016C47.9801 54.9973 48.2521 55.728 48.7961 56.208C49.3401 56.688 50.0228 56.928 50.8441 56.928C51.3668 56.928 51.8361 56.8267 52.2521 56.624C52.6788 56.4213 53.0148 56.144 53.2601 55.792C53.5055 55.44 53.6281 55.04 53.6281 54.592V49.856C53.6281 49.6747 53.6815 49.5307 53.7881 49.424C53.9055 49.3067 54.0548 49.248 54.2361 49.248C54.4175 49.248 54.5668 49.3067 54.6841 49.424C54.8015 49.5307 54.8601 49.6747 54.8601 49.856V57.376C54.8601 57.568 54.8015 57.7227 54.6841 57.84C54.5668 57.9467 54.4175 58 54.2361 58C54.0548 58 53.9055 57.9467 53.7881 57.84C53.6815 57.7227 53.6281 57.568 53.6281 57.376V56.832C53.2761 57.2267 52.8495 57.536 52.3481 57.76C51.8468 57.984 51.3028 58.096 50.7161 58.096ZM58.5202 58C58.3282 58 58.1736 57.9467 58.0562 57.84C57.9496 57.7227 57.8962 57.5733 57.8962 57.392V49.872C57.8962 49.68 57.9496 49.5307 58.0562 49.424C58.1736 49.3067 58.3282 49.248 58.5202 49.248C58.7016 49.248 58.8456 49.3067 58.9522 49.424C59.0696 49.5307 59.1282 49.68 59.1282 49.872V50.416C59.4696 50.0213 59.8909 49.712 60.3922 49.488C60.9042 49.264 61.4536 49.152 62.0402 49.152C62.7976 49.152 63.4749 49.312 64.0722 49.632C64.6696 49.9413 65.1389 50.4 65.4802 51.008C65.8322 51.616 66.0082 52.3573 66.0082 53.232V57.392C66.0082 57.5627 65.9496 57.7067 65.8322 57.824C65.7149 57.9413 65.5709 58 65.4002 58C65.2189 58 65.0696 57.9413 64.9522 57.824C64.8349 57.7067 64.7762 57.5627 64.7762 57.392V53.232C64.7762 52.24 64.4989 51.5093 63.9442 51.04C63.4002 50.56 62.7229 50.32 61.9122 50.32C61.3896 50.32 60.9149 50.4213 60.4882 50.624C60.0722 50.8267 59.7416 51.104 59.4962 51.456C59.2509 51.808 59.1282 52.208 59.1282 52.656V57.392C59.1282 57.5733 59.0696 57.7227 58.9522 57.84C58.8456 57.9467 58.7016 58 58.5202 58ZM72.3084 58C71.743 58 71.2364 57.8667 70.7884 57.6C70.351 57.3333 70.0044 56.9707 69.7484 56.512C69.4924 56.0427 69.3644 55.5093 69.3644 54.912V50.64H68.3244C68.1644 50.64 68.031 50.592 67.9244 50.496C67.8177 50.3893 67.7644 50.2613 67.7644 50.112C67.7644 49.952 67.8177 49.824 67.9244 49.728C68.031 49.6213 68.1644 49.568 68.3244 49.568H69.3644V47.088C69.3644 46.9067 69.4177 46.7573 69.5244 46.64C69.6417 46.5227 69.791 46.464 69.9724 46.464C70.1537 46.464 70.303 46.5227 70.4204 46.64C70.5377 46.7573 70.5964 46.9067 70.5964 47.088V49.568H72.4044C72.5644 49.568 72.6977 49.6213 72.8044 49.728C72.911 49.824 72.9644 49.952 72.9644 50.112C72.9644 50.2613 72.911 50.3893 72.8044 50.496C72.6977 50.592 72.5644 50.64 72.4044 50.64H70.5964V54.912C70.5964 55.456 70.7564 55.904 71.0764 56.256C71.3964 56.5973 71.807 56.768 72.3084 56.768H72.7404C72.911 56.768 73.0497 56.8267 73.1564 56.944C73.263 57.0613 73.3164 57.2107 73.3164 57.392C73.3164 57.5733 73.2524 57.7227 73.1244 57.84C72.9964 57.9467 72.8364 58 72.6444 58H72.3084Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_89:254"
                    x="15"
                    y="0"
                    width="48"
                    height="48"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_89:254"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_89:254"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_89:254"
                    x="0.224121"
                    y="45.504"
                    width="77.0923"
                    height="20.592"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_89:254"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_89:254"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  </>
);
