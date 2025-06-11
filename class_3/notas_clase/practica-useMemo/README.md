# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## UseMemo

La sintaxis basica  de useMemo es:
```js
const memorizedValue = useMemo(()=>{
    //Calculo costoso
    return value;
},[dependencias]);
```
- **Cálculo costoso**: Este es el valor o la operación que deseas memorizar.Puede ser cualquier operación que, al realizarse múltiples veces, consuma muchos recursos o tiempo de procesamiento.
- **Dependencias**: Esta es una lista de valores que, cuando cambian, harán que se recalcule el valor. Si ninguna de las dependencias cambia, React usará el valor memorizado en lugar de recalcularlo.

