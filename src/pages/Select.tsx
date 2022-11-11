import {
  Select,
  SelectGroup,
  SelectItem,
  SelectSeparator,
} from '../components/Select'

export const SelectPage = () => {
  return (
    <main className="flex flex-col gap-2">
      <Select placeholder="Pick one">
        <SelectGroup label="Fruits">
          <SelectItem value="apple">Apple</SelectItem>
          <SelectSeparator />
          <SelectItem value="banana">Banana</SelectItem>
          <SelectSeparator />
          <SelectItem value="orange">Orange</SelectItem>
        </SelectGroup>
        <SelectGroup label="Vegetables">
          <SelectItem value="broccoli">Broccoli</SelectItem>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="cucumber">Cucumber</SelectItem>
        </SelectGroup>
        <SelectGroup label="Meat">
          <SelectItem value="beef">Beef</SelectItem>
          <SelectItem value="chicken">Chicken</SelectItem>
          <SelectItem value="pork">Pork</SelectItem>
        </SelectGroup>
      </Select>
    </main>
  )
}
