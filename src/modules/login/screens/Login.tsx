import { Text, View } from 'react-native';
import { ContainerLogin } from '../styles/login.style';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';


const Login = () => {

  const handlePress=()=>{
    console.log('clicou')
  }
  return (
    <View>
      <ContainerLogin>
        <Text>LOGIN</Text>
        <Input />

        <Button margin='8px' title='Entrar' onPress={handlePress}/>
      </ContainerLogin>


    </View>
  );
};

export default Login;
