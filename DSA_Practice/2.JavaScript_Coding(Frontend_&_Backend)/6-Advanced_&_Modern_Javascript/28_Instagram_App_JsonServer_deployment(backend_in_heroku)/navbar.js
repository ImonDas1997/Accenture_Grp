const navbar = () => {
  return `<div id="logo">
   <a href='index.html'> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" alt="" /></a>
  </div>
  <div id="search">
  <input type='text'/> 
</div>

  <div id="options">
    <a href="./create.html"><button id='submit_btn'>Create Post</button></a>
  </div>`;
};

//Named export
export { navbar }; //we are just using if for resusable code-->