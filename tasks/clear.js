import del from"del";

import path from"./config/paths";

export default () => {
	return del(path.root);
}

