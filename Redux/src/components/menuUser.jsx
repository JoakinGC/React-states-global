import { connect } from 'react-redux';
import { store } from '../redeux/store';



const MenuUsuario = () => {
  const name = store.getState().username;
  return (
    <div>
      <h2>Bienvenido, {name}!</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(MenuUsuario);

