import React from 'react';

const SIZES = {
    big: 136,
    small: 61,
};

export const Image = ({size= 'big'}: {size?: 'big' | 'small'}) => (
    <svg width={SIZES[size]} height={SIZES[size]} viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M68 136C105.555 136 136 105.555 136 68C136 60.1133 134.657 52.5401 132.188 45.4967L45.4967 132.188C52.5401 134.657 60.1133 136 68 136ZM13.0509 108.065L46.416 74.7003L7.89132 36.1756C2.85364 45.6708 0 56.5022 0 68C0 82.9801 4.84392 96.8289 13.0509 108.065ZM36.1756 7.89132L74.7003 46.416L108.065 13.0509C96.8289 4.84392 82.9801 0 68 0C56.5022 0 45.6708 2.85364 36.1756 7.89132Z" fill="#FDBF5A"/>
        <path d="M22.4142 22.5857L30.8284 30.9999" stroke="#FDBF5A" strokeWidth="4"/>
        <path d="M40.4142 109L32 117.414" stroke="#FDBF5A" strokeWidth="4"/>
        <path d="M55.4142 93L47 101.414" stroke="#FDBF5A" strokeWidth="4"/>
        <path d="M70.4142 77L62 85.4142" stroke="#FDBF5A" strokeWidth="4"/>
        <path d="M100.414 45L92 53.4142" stroke="#FDBF5A" strokeWidth="4"/>
        <path d="M115.414 29L107 37.4142" stroke="#FDBF5A" strokeWidth="4"/>
        <path d="M38 38L46.4142 46.4142" stroke="#FDBF5A" strokeWidth="4"/>
        <path d="M55 55L63.4142 63.4142" stroke="#FDBF5A" strokeWidth="4"/>
        <path d="M85.4142 61L77 69.4142" stroke="#FDBF5A" strokeWidth="4"/>
    </svg>
);

export const Text = () => (
    <svg width="196" height="25" viewBox="0 0 196 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6458 0.159998L14.8458 6.172H6.13375L7.78975 0.231999L16.6458 0.159998ZM23.4138 18.844L18.3738 24.964H0.87775L5.52175 8.548H14.2698L11.3898 18.808L23.4138 18.844ZM51.0828 6.208H27.3588C27.8388 4.576 28.6548 3.196 29.8068 2.068C31.2228 0.7 32.6868 0.0159998 34.1988 0.0159998H46.4388C49.5348 0.0159998 51.0828 1.66 51.0828 4.948C51.0828 5.764 51.0828 6.184 51.0828 6.208ZM50.5788 8.512L50.4348 9.088C50.0508 10.336 49.3908 12.616 48.4548 15.928C47.8548 18.016 46.9308 19.768 45.6828 21.184C43.4268 23.728 40.4028 25 36.6108 25H32.3268C30.0228 25 28.1988 24.568 26.8548 23.704C25.1988 22.672 24.3708 21.076 24.3708 18.916C24.3708 17.764 24.5508 16.54 24.9108 15.244L26.7108 8.584H35.0988L32.6148 17.332C32.5188 17.74 32.4708 18.052 32.4708 18.268C32.4708 18.748 32.6868 19.048 33.1188 19.168H38.3388C38.9868 19 39.4668 18.388 39.7788 17.332L42.3708 8.548L50.5788 8.512ZM76.5149 0.159998L74.7869 6.208H51.4229L55.2749 0.159998H76.5149ZM74.2829 8.548L72.3029 15.136H60.7469L58.0469 24.964H48.5789L53.1509 8.548H74.2829ZM102.46 0.159998L100.804 6.136H76.8276L80.6436 0.159998H102.46ZM93.1356 8.548L88.7796 24.964H80.5356L84.9996 8.548H93.1356Z" fill="white"/>
        <path d="M128.792 0.159998L127.136 6.136H103.16L106.976 0.159998H128.792ZM119.468 8.548L115.112 24.964H106.868L111.332 8.548H119.468ZM150.984 6.208H135.432L140.616 0.159998H149.688L150.984 6.208ZM155.016 24.964H145.98L143.532 15.172H138.42L131.184 24.964H120.636L133.524 8.512H151.488L155.016 24.964ZM185.421 0.196L179.625 6.172L162.201 6.136L160.761 0.267999H169.797L170.481 3.076L173.145 0.231999L185.421 0.196ZM177.393 8.548L173.037 13.336L175.485 25L166.125 24.964L165.441 21.94L162.741 25H150.536L163.173 11.032L162.669 8.62L177.393 8.548ZM195.114 0.159998L193.458 6.208H184.782L186.51 0.159998H195.114ZM192.918 8.548L188.418 24.964H179.67L184.242 8.548H192.918Z" fill="#FDBF5A"/>
    </svg>
);