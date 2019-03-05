import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User';

const Nav =_=> (
  <NavStyles>
    <User>
      {(data) => {
        console.log(data);
        return <p>User</p>;
      }}
    </User>
    <Link href="/">
      <a>Shop</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    <Link href="/signup">
      <a>Singup</a>
    </Link>
    <Link href="/orders">
      <a>Orders</a>
    </Link>
    <Link href="/me">
      <a>Account</a>
    </Link>
  </NavStyles>
);

export default Nav;