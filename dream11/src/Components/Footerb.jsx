const Footerb = () => {
    return (
      <footer className="bg-gray-900 text-gray-400  pt-52 pb-12 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div>
<img src="../assets/logo-footer.png" alt="" />

            <h3 className="text-white font-bold mb-2">About Us</h3>
            <p>We are a passionate team dedicated to providing the best services.</p>
          </div>
          <div>
          <h3 className="text-white font-bold mb-2">Quick Links</h3>
          <ul className="list-disc list-inside space-y-1">
   <li>Home</li>
   <li>Services</li>
   <li>About</li>
   <li>Contact</li>
   </ul>
          </div>
          <div>
 
            <h3 className="text-white font-bold mb-2">Subscribe</h3>
            <h3>Subscribe to our newsletter for the latest updates.</h3>
            <div className="flex mt-2">
      <div className="bg-white rounded-bl-2xl rounded-tl-2xl ">
      <input type="email" placeholder="Enter your email" className="px-3 py-2 rounded-l-md text-black" />
      </div>
              <button className="bg-gradient-to-r from-pink-400 to-yellow-300 px-4 py-2 rounded-r-md text-white">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="mt-8 h-[1px] bg-gray-400 w-full"></div>

        <p className="text-center text-sm mt-8">©2025 Your Company. All Rights Reserved.</p>
      </footer>
    );
  };
  
  export default Footerb;
  