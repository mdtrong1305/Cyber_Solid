document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("default-search");
    const resultsContainer = document.getElementById("search-results");
    const resultItems = resultsContainer.querySelectorAll("a");
    const noResults = document.getElementById("no-results");
    const wrapper = document.getElementById('results-wrapper');

    searchInput.addEventListener("input", () => {
      const keyword = searchInput.value.trim().toLowerCase();
      let visibleCount = 0;

      resultItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(keyword)) {
          item.classList.remove("hidden");
          visibleCount++;
        } else {
          item.classList.add("hidden");
        }
      });

      // Hiển thị hoặc ẩn "No item found"
      if (visibleCount === 0) {
        noResults.classList.remove("hidden");
        wrapper.classList.remove('overflow-y-auto');
        
      } else {
        noResults.classList.add("hidden");
        wrapper.classList.add('overflow-y-auto');
      }
    });
});