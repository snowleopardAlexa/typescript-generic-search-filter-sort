export interface ISortersProps {

}

export function Sorters (props: ISortersProps) {
    return (
        <>
          <label htmlFor="sorters" className="mt-3">Sorters! Try us too</label>
          <select
           id="sorters"
           className="custom-select"
          >
          <option key={} value={}>
              Some label here: 
          </option>
          </select>
        </>
    )
}