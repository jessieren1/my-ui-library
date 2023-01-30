const Red: React.FC<any> = (props) => (
  <span style={{ color: "red" }} {...props} />
);

interface PropsDef {
  property: string;
  propType: { name: string };
  required: boolean;
  description: string;
  defaultValue: any;
}

interface TableComponentProps {
  propDefinitions: PropsDef[];
}

export const TableComponent: React.FC<TableComponentProps> = ({
  propDefinitions,
}) => {
  const props = propDefinitions.map(
    ({ property, propType, required, description, defaultValue }) => {
      return (
        <tr key={property}>
          <td style={{ width: "25%", border: "1px solid black" }}>
            {property}
            {required ? <Red /> : null}
          </td>
          <td style={{ width: "25%", border: "1px solid black" }}>
            {propType.name}
          </td>
          <td style={{ width: "25%", border: "1px solid black" }}>
            {defaultValue}
          </td>
          <td style={{ width: "25%", border: "1px solid black" }}>
            {description}
          </td>
        </tr>
      );
    }
  );

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ width: "25%", border: "1px solid black" }}>Property</th>
          <th style={{ width: "25%", border: "1px solid black" }}>Type</th>
          <th style={{ width: "25%", border: "1px solid black" }}>Default</th>
          <th style={{ width: "25%", border: "1px solid black" }}>
            Description
          </th>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </table>
  );
};
