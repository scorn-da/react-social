import { useLocation, useParams } from "react-router-dom";

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export function updateObjectInArray(items, itemId, objPropName, newObjProps) {
  items.map(item => {
    if (item[objPropName] === itemId) {
      return {...item, ...newObjProps};
    }
    return item;
  })
}
