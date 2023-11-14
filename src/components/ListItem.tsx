import { Check } from "lucide-react"
import { FC, ReactNode } from "react"

interface ListItemProps {
	children: ReactNode
}

const ListItem: FC<ListItemProps> = ({ children }) => {
	return (
		<li className="flex gap-1">
			<Check className="text-blue-osa w-4" />
			<p className="text-sm">{children}</p>
		</li>
	)
}
export default ListItem
