import {React,useState} from 'react'

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
  
    <div className="flex">
    {/* Sidebar */}
    <div className="bg-gray-800 text-white w-64 overflow-y-auto fixed h-screen">
      <div className="py-4 px-6">
        {/* Contenu du sidebar */}
        <h1 className="text-xl font-bold mb-4">Mon Sidebar</h1>
        <ul>
          {/* Exemple d'éléments de la barre latérale */}
          <li className="py-2">Élément 1</li>
          <li className="py-2">Élément 2</li>
          {/* ... */}
          {/* Ajoute plus d'éléments pour simuler l'effet d'overflow */}
          {Array.from({ length: 15  }, (_, i) => (
            <li key={i} className="py-2 my-4">menu  {i + 3}</li>
          ))}
        </ul>
      </div>  
    </div>

    {/* Content */}
    <div className="flex-1 p-10 ml-20 ">
      {/* Main Content */}
      <div className="bg-teal-600 my-2   p-8  flex justify-end items-end gap-6 ">
       <div>
        <h1 className="bg-gray-100 ml-33   p-7 ">Contenu Principal</h1></div>
        <div>
        <p className="bg-yellow-100 p-12   ">
          Lorem ipsum dolor sit amet,
             consectetur adipiscing <br/>elit. Sed eget magna at ligula
          dignissim placerat.
        </p >
        </div>
        <div>
        <h1 className="bg-gray-100    ">Contenu Principal</h1></div>
        <div>
        <p className="bg-yellow-100   ">
          Lorem ipsum dolor sit amet,
             consectetur adipiscing <br/>elit. Sed eget magna at ligula
          dignissim placerat.
        </p >
        </div>
       
       
        {/* ... */}
      </div>

      <div className="bg-teal-200 my-3   p-8  flex justify-end items-end gap-6 ">
       
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
      
       {/* ... */}
     </div>
     <div className="bg-orange-100 p-8  flex justify-end items-end gap-6 ">
       
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
      
       {/* ... */}
     </div>
     <div className="bg-orange-200 my-3  p-8  flex justify-end items-end gap-6 ">
       
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
      
       {/* ... */}
     </div>
     <div className="bg-orange-400 my-3 p-8  flex justify-end items-end gap-6 ">
       
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
      
       {/* ... */}
     </div>
     <div className="bg-white p-8  flex justify-end items-end gap-6 ">
       
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
      
       {/* ... */}
     </div>
     <div className="bg-white p-8  flex justify-end items-end gap-6 ">
       
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
      
       {/* ... */}
     </div>
     <div className="bg-white p-8  flex justify-end items-end gap-6 ">
       
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
      
       {/* ... */}
     </div>
     <div className="bg-pink-200 p-8  flex justify-end items-end gap-6 ">
       
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
      
       {/* ... */}
     </div>
     <div className="bg-pink-300 my-3 p-8  flex justify-end items-end gap-6 ">
       
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
      
       {/* ... */}
     </div>
     <div className="bg-white p-8  flex justify-end items-end gap-6 ">
       
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
      
       {/* ... */}
     </div>
     <div className="bg-white p-8  flex justify-end items-end gap-6 ">
       
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
      
       {/* ... */}
     </div>
     <div className="bg-white p-8  flex justify-end items-end gap-6 ">
       
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
      
       {/* ... */}
     </div>
     <div className="bg-white p-8  flex justify-end items-end gap-6 ">
       
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
       <h1>Contenu Principal</h1>
       <p>
         Lorem ipsum dolor sit amet,
            consectetur adipiscing <br/>elit. Sed eget magna at ligula
         dignissim placerat.
       </p>
      
       {/* ... */}
     </div>
    </div>
  </div>

  
  )
}

export default Sidebar