import { useEffect, useState } from "react";
import window from "global/window";

function useBrowserStorageLimit() {
  const [loading, updateLoading] = useState(false);
  const [quota, updateQuota] = useState(0);
  const [usage, updateUsage] = useState(0);
  const [error, updateError] = useState();

  useEffect(() => {
    checkQuota();
    window.addEventListener("storage", checkQuota);
    return () => {
      window.removeEventListener("storage", checkQuota);
    };
  }, []);

  async function checkQuota() {
    if (!window.navigator) {
      return;
    }
    const storageQuota = await getQuota();
    updateQuota(storageQuota.quota);
    updateUsage(storageQuota.usage);
  }

  async function getQuota() {
    let storage = { quota: 0, usage: 0 };
    try {
      updateLoading(true);
      storage = await window.navigator.storage.estimate();
    } catch (ex) {
      updateError(ex);
    } finally {
      updateLoading(false);
    }
    return storage;
  }

  const percentage = ((usage / quota) * 100).toFixed(2);

  return { loading, quota, usage, percentage, error, getQuota };
}

export default useBrowserStorageLimit;
