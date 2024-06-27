import './App.css';
import React from "react";


 const App = () => {
   return (
      <div className='app-wrapper'>
        <header className='header'>
          <img src='https://i.pinimg.com/originals/78/39/75/783975e46b01e018bc1a2984fff11515.jpg' alt={25}/>
        </header>
        <nav className='nav'>
          <div>
              <a>Profile</a>
          </div>
           <div>
              <a>Messages</a>
           </div>
            <div>
                <a> News</a>
            </div>
            <div>
             <a>Settings</a>
            </div>
            <div>
                <a>Music</a>
            </div>

        </nav>
          <div className='content'>
              <img src='https://avatars.dzeninfra.ru/get-zen_doc/138668/pub_6192d28c11f0f35b2da318fa_6192d8134372f804ebfc7414/scale_1200' />
             <div>
              ava+decsription
             </div>
           <div>
            My posts
              <div>New post
                 <div> Post1</div>
                 <div> Post2</div>
              </div>
           </div>
          </div>
      </div>
  );
 }
export default App;