import React,{useContext} from 'react';
import { connect } from 'react-redux';

const MenuUsuario = ({ user }) => {
  return (
    <div>
      <h2>Bienvenido, {user.name}!</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(MenuUsuario);

