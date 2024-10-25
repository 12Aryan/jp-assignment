const LightBulb = ({ fill = "#1C1C1C" }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.375 14C18.375 14.8653 18.1184 15.7112 17.6377 16.4306C17.157 17.1501 16.4737 17.7108 15.6742 18.042C14.8748 18.3731 13.9951 18.4597 13.1465 18.2909C12.2978 18.1221 11.5183 17.7054 10.9064 17.0936C10.2946 16.4817 9.87788 15.7022 9.70907 14.8535C9.54026 14.0049 9.6269 13.1252 9.95803 12.3258C10.2892 11.5263 10.8499 10.8431 11.5694 10.3623C12.2888 9.88159 13.1347 9.625 14 9.625C15.1603 9.625 16.2731 10.0859 17.0936 10.9064C17.9141 11.7269 18.375 12.8397 18.375 14Z"
        fill={fill}
        fillOpacity="0.1"
      />
      <path
        d="M13.375 7.125V5.25C13.375 5.08424 13.4408 4.92527 13.5581 4.80806C13.6753 4.69085 13.8342 4.625 14 4.625C14.1658 4.625 14.3247 4.69085 14.4419 4.80806C14.5592 4.92527 14.625 5.08424 14.625 5.25V7.125C14.625 7.29076 14.5592 7.44973 14.4419 7.56694C14.3247 7.68415 14.1658 7.75 14 7.75C13.8342 7.75 13.6753 7.68415 13.5581 7.56694C13.4408 7.44973 13.375 7.29076 13.375 7.125ZM19 14C19 14.9889 18.7068 15.9556 18.1573 16.7779C17.6079 17.6001 16.827 18.241 15.9134 18.6194C14.9998 18.9978 13.9945 19.0969 13.0245 18.9039C12.0546 18.711 11.1637 18.2348 10.4645 17.5355C9.7652 16.8363 9.289 15.9454 9.09607 14.9755C8.90315 14.0055 9.00216 13.0002 9.3806 12.0866C9.75904 11.173 10.3999 10.3921 11.2221 9.84265C12.0444 9.29324 13.0111 9 14 9C15.3256 9.00145 16.5966 9.5287 17.5339 10.4661C18.4713 11.4034 18.9986 12.6744 19 14ZM17.75 14C17.75 13.2583 17.5301 12.5333 17.118 11.9166C16.706 11.2999 16.1203 10.8193 15.4351 10.5355C14.7498 10.2516 13.9958 10.1774 13.2684 10.3221C12.541 10.4668 11.8728 10.8239 11.3483 11.3483C10.8239 11.8728 10.4668 12.541 10.3221 13.2684C10.1774 13.9958 10.2516 14.7498 10.5355 15.4351C10.8193 16.1203 11.2999 16.706 11.9166 17.118C12.5333 17.5301 13.2583 17.75 14 17.75C14.9942 17.749 15.9475 17.3535 16.6505 16.6505C17.3535 15.9475 17.749 14.9942 17.75 14ZM8.55781 9.44219C8.67509 9.55946 8.83415 9.62535 9 9.62535C9.16585 9.62535 9.32491 9.55946 9.44219 9.44219C9.55946 9.32491 9.62535 9.16585 9.62535 9C9.62535 8.83415 9.55946 8.67509 9.44219 8.55781L8.19219 7.30781C8.07491 7.19054 7.91585 7.12465 7.75 7.12465C7.58415 7.12465 7.42509 7.19054 7.30781 7.30781C7.19054 7.42509 7.12465 7.58415 7.12465 7.75C7.12465 7.91585 7.19054 8.07491 7.30781 8.19219L8.55781 9.44219ZM8.55781 18.5578L7.30781 19.8078C7.19054 19.9251 7.12465 20.0841 7.12465 20.25C7.12465 20.4159 7.19054 20.5749 7.30781 20.6922C7.42509 20.8095 7.58415 20.8753 7.75 20.8753C7.91585 20.8753 8.07491 20.8095 8.19219 20.6922L9.44219 19.4422C9.50026 19.3841 9.54632 19.3152 9.57775 19.2393C9.60917 19.1634 9.62535 19.0821 9.62535 19C9.62535 18.9179 9.60917 18.8366 9.57775 18.7607C9.54632 18.6848 9.50026 18.6159 9.44219 18.5578C9.38412 18.4997 9.31518 18.4537 9.23931 18.4223C9.16344 18.3908 9.08212 18.3747 9 18.3747C8.91788 18.3747 8.83656 18.3908 8.76069 18.4223C8.68482 18.4537 8.61588 18.4997 8.55781 18.5578ZM19 9.625C19.0821 9.62506 19.1634 9.60895 19.2393 9.57759C19.3152 9.54622 19.3841 9.50021 19.4422 9.44219L20.6922 8.19219C20.8095 8.07491 20.8753 7.91585 20.8753 7.75C20.8753 7.58415 20.8095 7.42509 20.6922 7.30781C20.5749 7.19054 20.4159 7.12465 20.25 7.12465C20.0841 7.12465 19.9251 7.19054 19.8078 7.30781L18.5578 8.55781C18.4703 8.64522 18.4107 8.75663 18.3865 8.87793C18.3624 8.99924 18.3748 9.12498 18.4221 9.23924C18.4695 9.35351 18.5496 9.45116 18.6525 9.51982C18.7554 9.58849 18.8763 9.6251 19 9.625ZM19.4422 18.5578C19.3249 18.4405 19.1659 18.3747 19 18.3747C18.8341 18.3747 18.6751 18.4405 18.5578 18.5578C18.4405 18.6751 18.3747 18.8341 18.3747 19C18.3747 19.1659 18.4405 19.3249 18.5578 19.4422L19.8078 20.6922C19.8659 20.7503 19.9348 20.7963 20.0107 20.8277C20.0866 20.8592 20.1679 20.8753 20.25 20.8753C20.3321 20.8753 20.4134 20.8592 20.4893 20.8277C20.5652 20.7963 20.6341 20.7503 20.6922 20.6922C20.7503 20.6341 20.7963 20.5652 20.8277 20.4893C20.8592 20.4134 20.8753 20.3321 20.8753 20.25C20.8753 20.1679 20.8592 20.0866 20.8277 20.0107C20.7963 19.9348 20.7503 19.8659 20.6922 19.8078L19.4422 18.5578ZM7.75 14C7.75 13.8342 7.68415 13.6753 7.56694 13.5581C7.44973 13.4408 7.29076 13.375 7.125 13.375H5.25C5.08424 13.375 4.92527 13.4408 4.80806 13.5581C4.69085 13.6753 4.625 13.8342 4.625 14C4.625 14.1658 4.69085 14.3247 4.80806 14.4419C4.92527 14.5592 5.08424 14.625 5.25 14.625H7.125C7.29076 14.625 7.44973 14.5592 7.56694 14.4419C7.68415 14.3247 7.75 14.1658 7.75 14ZM14 20.25C13.8342 20.25 13.6753 20.3158 13.5581 20.4331C13.4408 20.5503 13.375 20.7092 13.375 20.875V22.75C13.375 22.9158 13.4408 23.0747 13.5581 23.1919C13.6753 23.3092 13.8342 23.375 14 23.375C14.1658 23.375 14.3247 23.3092 14.4419 23.1919C14.5592 23.0747 14.625 22.9158 14.625 22.75V20.875C14.625 20.7092 14.5592 20.5503 14.4419 20.4331C14.3247 20.3158 14.1658 20.25 14 20.25ZM22.75 13.375H20.875C20.7092 13.375 20.5503 13.4408 20.4331 13.5581C20.3158 13.6753 20.25 13.8342 20.25 14C20.25 14.1658 20.3158 14.3247 20.4331 14.4419C20.5503 14.5592 20.7092 14.625 20.875 14.625H22.75C22.9158 14.625 23.0747 14.5592 23.1919 14.4419C23.3092 14.3247 23.375 14.1658 23.375 14C23.375 13.8342 23.3092 13.6753 23.1919 13.5581C23.0747 13.4408 22.9158 13.375 22.75 13.375Z"
        fill={fill}
      />
    </svg>
  );
};

export default LightBulb;
