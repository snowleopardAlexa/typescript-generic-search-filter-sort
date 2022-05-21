export interface ISortersProps {
   object: T
}

export function Sorters<T>(props: ISortersProps<T>) {
    const { object } = props
    return (
        <>
          <label htmlFor="sorters" className="mt-3">Sorters! Try us too</label>
          <select
           id="sorters"
           className="custom-select">
           {Object.keys(object).map((key) => {
               return (
                <option key={key} value={key}>
                  Sort by '{key}'
                </option>
               )
           })}
          </select>
        </>
    )
}