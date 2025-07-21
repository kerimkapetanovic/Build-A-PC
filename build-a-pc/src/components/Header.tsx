"use client";
import Link from "next/link";
import {useEffect,useState} from "react";
import {useRouter} from 'next/navigation';

function Header(){
  const [user,setUser]=useState(null);
  const [dropdownVisible,setDropdownVisible]=useState(false);
  const [searchQuery,setSearchQuery]=useState('');
  const router=useRouter();

  useEffect(()=>
    {
    const storedUser=localStorage.getItem("user");
    if (storedUser) 
    {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout=() => 
  {
    localStorage.removeItem("user");
    setUser(null);
    setDropdownVisible(false);
  };

  const toggleDropdown=() => 
  {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSearchChange= (e)=> 
  {
    setSearchQuery(e.target.value);
  };

  const handleSearch=() => 
    {
    if(searchQuery.trim()!=='') 
    {
      router.push(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div className="headerBlock">
      <a href="http://localhost:3000"><img src="/buildAPCLogo.PNG" style={{width: "221px",border: "none", marginLeft: "14px",}}></img></a>
      <div className="searchBox">
        <input type="text" placeholder="Search:" value={searchQuery} onChange={handleSearchChange} style={{width: "750px",height: "45px",display: "inline-block",color: "black",borderTopLeftRadius: "4px",borderBottomLeftRadius: "4px",fontWeight: "bold",}}></input>
        <button onClick={handleSearch}>
          <img src="/searchLoopIcon.jpg"alt="Search"style={{height: "45px",display: "inline-block",borderTopRightRadius: "4px",borderBottomRightRadius: "4px",}}></img>
          </button>
      </div>
      <div className="contactInformation">
        <u>
          <a href="mailto:220302143@student.ius.edu.ba">E-Mail</a>
          <span>/</span>
          <a href="tel:060 321 9466">060 321 94-66</a>
        </u>
      </div>

      <div className="signIn">
        {user ? (<div className="userDropdown"><span onClick={toggleDropdown} style={{ cursor: "pointer" }}>{`${user.name} ${user.surname}`}</span>
            {dropdownVisible && (
              <div className="dropdownMenu">
                <button onClick={handleLogout}>Log Out</button>
              </div>)}
          </div>) : (
          <Link href="/signIn">Sign-In</Link>
        )}
      </div>
      <div className="shoppingCart">
        <button><Link href="/shoppingCart"><img src="/shoppingCartIcon.png"className="tw-w-[30px]"></img></Link>
        </button>
      </div>
    </div>
  );
}
export default Header;