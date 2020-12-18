# use-browser-storage-limit
React Hook to detect the browser storage limit

## Getting Started

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Output](#output)
- [Contribution](#contribution)
- [Questions](#questions)

### Installation

```bash
$ npx use-browser-storage-limit
```

### Basic Usage
```
import useBrowserStorageLimit from "use-browser-storage-limit";

function App() {
  const { loading, quota, usage, percentage, error } = useBrowserStorageLimit()

  return (
    <div className="App">
      {loading ? <p>Loading...</p> : error ? <div><p>Error: {error}</p></div> : <div>
        <p>Total Quota: {quota}</p>
        <p>Total Usage: {usage}</p>
        <p>Percentage Used: {percentage}%</p>
      </div>}
    </div>
  );
}
```

### Output
| Name  | Type  | Default | Description |
| :------------ |---------------:| :---------------| :-----|
| loading | Boolean | false | Loader |
| quota | Number | 0 | Total space of the Storage |
| usage | Number | 0 | Used space of the Storage |
| percentage | Number | 0 | Percentage of Storage used |
| error | String | `() => {}` | Async Storage clear item method |
| getQuota | function | `() => { quota, usage }` | Async function to get the estimate of the Storage |


## Contribution

- [@pritishvaidya](mailto:pritishvaidya94@gmail.com) The main author.

## Questions

Feel free to [contact me](mailto:pritishvaidya94@gmail.co) or [create an issue](https://github.com/pritishvaidya/use-browser-storage-limit/issues/new)
