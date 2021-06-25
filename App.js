import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Views
import Menu from './views/Menu';
import NewOrder from './views/NewOrder';
import OrderDetails from './views/OrderDetails';
import OrderProgress from './views/OrderProgress';
import ProductDetails from './views/ProductDetails';
import ProductForm from './views/ProductForm';

// States
import FirebaseState from './context/firebase/firebaseState';
import OrderState from './context/orders/orderState';

const Stack = createStackNavigator();

const App = () => {

  return (
    <>
      <FirebaseState>
        <OrderState>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#7C3AED'
                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  color: 'white'
                }
              }}
            >
              <Stack.Screen 
                name="Menu"
                component={Menu}
                options={{
                  title: 'Menu'
                }}
              />

              <Stack.Screen 
                name="NewOrder"
                component={NewOrder}
                options={{
                  title: 'Nuevo Pedido'
                }}
              />

              <Stack.Screen 
                name="OrderDetails"
                component={OrderDetails}
                options={{
                  title: 'Resumen del Pedido'
                }}
              />

              <Stack.Screen 
                name="OrderProgress"
                component={OrderProgress}
                options={{
                  title: 'Progreso del Pedido'
                }}
              />

              <Stack.Screen 
                name="ProductDetails"
                component={ProductDetails}
                options={{
                  title: 'Detalles de Producto'
                }}
              />

              <Stack.Screen 
                name="ProductForm"
                component={ProductForm}
                options={{
                  title: 'Formulario'
                }}
              />
              
            </Stack.Navigator>
          </NavigationContainer>
        </OrderState>
      </FirebaseState>
    </>
  );
};

export default App;
