const { useEffect } = require("react");

const useSetTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Dream Watches`;
  }, [title]);
};
export default useSetTitle;
