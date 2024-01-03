import { Actions } from '../TableActions/Actions';

interface TableActionsProps {
  item: Object;
  actions?: Object[];
}

const TableActions = ({ item, actions }: TableActionsProps) => {
  return (
    <Actions>
      {actions?.map((action: any, index: number) => {
        const { type, action: act } = action;
        switch (type) {
          case 'CREATE':
            return <Actions.Add key={index} />;
          case 'READ':
            return <Actions.More key={index} />;
          case 'UPDATE':
            return <Actions.Edit key={index} />;
          case 'DELETE':
            return <Actions.Delete key={index} />;
          default:
            return null;
        }
      })}
    </Actions>
  );
};

export default TableActions;
