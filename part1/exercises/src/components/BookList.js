export default function BookList() {
   let pageTitle = "Latest Book Releases";
   let book1 = "https://spiralbookcase.com/cdn/shop/files/355167_1024x1024@2x.jpg?v=1685648609";
   let book2 = "https://upload.wikimedia.org/wikipedia/en/f/f0/Still_Alice_%28Genova_novel%29.jpg";
   let book3 = "https://m.media-amazon.com/images/I/517d+E9bfCL._SX331_BO1,204,203,200_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Lives of the Heart, Jane Hirshfield" />
         <img src={book2} alt="Still Alice a Novel By Lisa Genova " />
         <img src={book3} alt="The Forest of Hands and Teeth, Carrie Ryan" />
      </div>      
   );
}

