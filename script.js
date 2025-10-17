// Wealth levels configuration
const WEALTH_LEVELS = {
    average: {
        name: 'Average Person',
        total: 50000,
        chunkSize: 5000
    },
    millionaire: {
        name: 'Millionaire',
        total: 1000000,
        chunkSize: 100000
    },
    billionaire: {
        name: 'Billionaire',
        total: 1000000000,
        chunkSize: 100000
    },
    musk: {
        name: 'Elon Musk',
        total: 200000000000,
        chunkSize: 100000
    },
    bezos: {
        name: 'Jeff Bezos',
        total: 150000000000,
        chunkSize: 100000
    }
};

// Shopping items organized by category
const SHOP_ITEMS = [
    // Everyday Items
    { category: 'Everyday Items', name: 'Coffee', price: 4, icon: '☕' },
    { category: 'Everyday Items', name: 'Lunch', price: 15, icon: '🍔' },
    { category: 'Everyday Items', name: 'Groceries (weekly)', price: 100, icon: '🛒' },
    { category: 'Everyday Items', name: 'Cinema Ticket', price: 12, icon: '🎬' },
    { category: 'Everyday Items', name: 'Gym Membership (month)', price: 50, icon: '💪' },
    { category: 'Everyday Items', name: 'Netflix (year)', price: 180, icon: '📺' },

    // Electronics & Gadgets
    { category: 'Electronics & Gadgets', name: 'Smartphone', price: 1200, icon: '📱' },
    { category: 'Electronics & Gadgets', name: 'Laptop', price: 2500, icon: '💻' },
    { category: 'Electronics & Gadgets', name: 'Gaming Console', price: 500, icon: '🎮' },
    { category: 'Electronics & Gadgets', name: 'Smart TV', price: 1500, icon: '📺' },
    { category: 'Electronics & Gadgets', name: 'VR Headset', price: 800, icon: '🥽' },
    { category: 'Electronics & Gadgets', name: 'Designer Watch', price: 15000, icon: '⌚' },

    // Vehicles
    { category: 'Vehicles', name: 'Bicycle', price: 1000, icon: '🚲' },
    { category: 'Vehicles', name: 'Motorcycle', price: 15000, icon: '🏍️' },
    { category: 'Vehicles', name: 'Family Car', price: 35000, icon: '🚗' },
    { category: 'Vehicles', name: 'Electric Car', price: 60000, icon: '🔋' },
    { category: 'Vehicles', name: 'Luxury Sports Car', price: 200000, icon: '🏎️' },
    { category: 'Vehicles', name: 'Supercar', price: 500000, icon: '🏁' },
    { category: 'Vehicles', name: 'Helicopter', price: 2000000, icon: '🚁' },
    { category: 'Vehicles', name: 'Private Jet', price: 60000000, icon: '🛩️' },

    // Property
    { category: 'Property', name: 'Studio Flat', price: 200000, icon: '🚪' },
    { category: 'Property', name: 'Family Home', price: 350000, icon: '🏠' },
    { category: 'Property', name: 'Luxury Apartment', price: 1500000, icon: '🏙️' },
    { category: 'Property', name: 'Country Estate', price: 5000000, icon: '🏰' },
    { category: 'Property', name: 'Private Island', price: 50000000, icon: '🏝️' },
    { category: 'Property', name: 'Skyscraper', price: 1000000000, icon: '🏢' },

    // Travel & Experiences
    { category: 'Travel & Experiences', name: 'Weekend Break', price: 500, icon: '🎒' },
    { category: 'Travel & Experiences', name: 'Holiday (2 weeks)', price: 4000, icon: '🏖️' },
    { category: 'Travel & Experiences', name: 'Luxury Cruise', price: 15000, icon: '🛳️' },
    { category: 'Travel & Experiences', name: 'Round-the-World Trip', price: 80000, icon: '✈️' },
    { category: 'Travel & Experiences', name: 'Space Tourism', price: 500000, icon: '🚀' },
    { category: 'Travel & Experiences', name: 'Concert Tickets', price: 150, icon: '🎵' },

    // Luxury Items
    { category: 'Luxury Items', name: 'Designer Handbag', price: 5000, icon: '👜' },
    { category: 'Luxury Items', name: 'Diamond Ring', price: 25000, icon: '💍' },
    { category: 'Luxury Items', name: 'Fine Art Piece', price: 100000, icon: '🖼️' },
    { category: 'Luxury Items', name: 'Rare Wine Collection', price: 50000, icon: '🍷' },
    { category: 'Luxury Items', name: 'Yacht', price: 150000000, icon: '🛥️' },
    { category: 'Luxury Items', name: 'Superyacht', price: 500000000, icon: '⛵' },

    // Business & Investment
    { category: 'Business & Investment', name: 'Start Small Business', price: 50000, icon: '🏪' },
    { category: 'Business & Investment', name: 'Franchise Restaurant', price: 500000, icon: '🍽️' },
    { category: 'Business & Investment', name: 'Boutique Hotel', price: 5000000, icon: '🏨' },
    { category: 'Business & Investment', name: 'Shopping Mall', price: 100000000, icon: '🏬' },
    { category: 'Business & Investment', name: 'Football Club', price: 2000000000, icon: '⚽' },
    { category: 'Business & Investment', name: 'Major Film Studio', price: 500000000, icon: '🎥' },

    // Charity & Giving
    { category: 'Charity & Giving', name: 'Build a School', price: 2000000, icon: '🏫' },
    { category: 'Charity & Giving', name: 'Fund Hospital Wing', price: 10000000, icon: '🏥' },
    { category: 'Charity & Giving', name: 'End Homelessness (city)', price: 500000000, icon: '🏘️' },
    { category: 'Charity & Giving', name: 'Clean Ocean Project', price: 1000000000, icon: '🌊' }
];

// Global state
let currentWealth = 'billionaire';
let chunks = [];
let totalSpent = 0;
let draggedItem = null;
let purchaseHistory = [];
let pendingWealthLevel = null;

// Virtual scrolling state
let visibleChunkStart = 0;
let visibleChunkEnd = 0;
let CHUNK_ROW_HEIGHT = 82; // Height of a chunk row in pixels including padding (will be measured dynamically)
const CHUNK_BLOCK_GAP = 32; // Gap between blocks in pixels (from CSS .chunks-wrapper)
const BUFFER_ROWS = 5; // Extra rows to render above/below viewport

// Initialize the app
function init() {
    createChunks();
    populateShopItems();
    setupEventListeners();
    setupVirtualScrolling();
    updateStats();
}

// Create chunk system (data only, no DOM)
function createChunks() {
    const config = WEALTH_LEVELS[currentWealth];
    const chunkSize = config.chunkSize;
    const totalChunks = Math.ceil(config.total / chunkSize);

    chunks = [];
    for (let i = 0; i < totalChunks; i++) {
        chunks.push({
            id: i,
            value: chunkSize,
            remaining: chunkSize,
            purchases: []
        });
    }

    renderVisibleChunks();
}

// Setup virtual scrolling
function setupVirtualScrolling() {
    const wrapper = document.getElementById('chunksWrapper');
    let ticking = false;

    // Listen to window scroll since body is the scrolling element
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateVisibleChunks();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Event delegation for drag-and-drop on chunks
    wrapper.addEventListener('dragover', (e) => {
        const chunk = e.target.closest('.chunk');
        if (chunk) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
            chunk.classList.add('drop-target');
        }
    });

    wrapper.addEventListener('dragleave', (e) => {
        const chunk = e.target.closest('.chunk');
        if (chunk && !chunk.contains(e.relatedTarget)) {
            chunk.classList.remove('drop-target');
        }
    });

    wrapper.addEventListener('drop', (e) => {
        const chunk = e.target.closest('.chunk');
        if (chunk) {
            e.preventDefault();
            chunk.classList.remove('drop-target');

            if (!draggedItem) return;

            const chunkId = parseInt(chunk.dataset.chunkId);
            makePurchase(chunkId, draggedItem);

            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.getElementById('shopPanel').classList.remove('active');
            document.getElementById('purchasesPanel').classList.remove('active');
        }
    });

    // Initial render
    updateVisibleChunks();
}

// Calculate and render only visible chunks
function updateVisibleChunks() {
    const wrapper = document.getElementById('chunksWrapper');
    const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    // Calculate scroll position relative to the wrapper
    const relativeScrollTop = Math.max(0, scrollTop - wrapperTop);

    const chunksPerRow = 10;
    const rowsPerBlock = 10;
    const totalRows = Math.ceil(chunks.length / chunksPerRow);

    // Calculate which row is at the top of the viewport
    // We need to account for gaps between blocks
    // Formula: position = (blockIndex * blockHeight) + (blockIndex * gap)
    // Where blockHeight = rowsPerBlock * CHUNK_ROW_HEIGHT
    const blockHeight = rowsPerBlock * CHUNK_ROW_HEIGHT;
    const blockWithGapHeight = blockHeight + CHUNK_BLOCK_GAP;

    // Find which block we're in
    const approxBlockIndex = Math.floor(relativeScrollTop / blockWithGapHeight);
    const positionInBlock = relativeScrollTop - (approxBlockIndex * blockWithGapHeight);

    // Calculate the actual row
    const firstVisibleRow = (approxBlockIndex * rowsPerBlock) + Math.floor(positionInBlock / CHUNK_ROW_HEIGHT);

    // Similar calculation for last visible row
    const bottomScrollPos = relativeScrollTop + viewportHeight;
    const approxBottomBlockIndex = Math.floor(bottomScrollPos / blockWithGapHeight);
    const positionInBottomBlock = bottomScrollPos - (approxBottomBlockIndex * blockWithGapHeight);
    const lastVisibleRow = (approxBottomBlockIndex * rowsPerBlock) + Math.ceil(positionInBottomBlock / CHUNK_ROW_HEIGHT);

    // Add buffer
    const startRow = Math.max(0, firstVisibleRow - BUFFER_ROWS);
    const endRow = Math.min(lastVisibleRow + BUFFER_ROWS, totalRows);

    // Convert to chunk indices
    const newStart = startRow * chunksPerRow;
    const newEnd = Math.min(endRow * chunksPerRow, chunks.length);

    // Debug logging for large wealth levels
    if (chunks.length > 100000 && scrollTop > 0 && scrollTop % 10000 < 100) {
        console.log(`Scroll: ${scrollTop.toFixed(0)}px (relative: ${relativeScrollTop.toFixed(0)}px), Rendering rows ${startRow}-${endRow} of ${totalRows}, chunks ${newStart}-${newEnd} of ${chunks.length}`);
    }

    // Only update if visible range changed significantly
    if (newStart !== visibleChunkStart || newEnd !== visibleChunkEnd) {
        visibleChunkStart = newStart;
        visibleChunkEnd = newEnd;
        renderVisibleChunks();
    }
}

// Render only the visible chunks
function renderVisibleChunks() {
    const wrapper = document.getElementById('chunksWrapper');
    const chunksPerRow = 10;
    const rowsPerBlock = 10;
    const totalRows = Math.ceil(chunks.length / chunksPerRow);
    const totalBlocks = Math.ceil(totalRows / rowsPerBlock);

    // Calculate total height: (rows * row height) + (gaps between blocks)
    // Each block has 10 rows, and there's a gap after each block except the last
    const totalHeight = (totalRows * CHUNK_ROW_HEIGHT) + ((totalBlocks - 1) * CHUNK_BLOCK_GAP);

    // Check for CSS max-height limitations (browsers typically cap around 33.5M pixels)
    const MAX_CSS_HEIGHT = 33000000; // 33 million pixels
    const effectiveHeight = Math.min(totalHeight, MAX_CSS_HEIGHT);

    wrapper.style.minHeight = `${effectiveHeight}px`;
    wrapper.style.position = 'relative';

    // If we hit the height limit, we need a different approach
    if (totalHeight > MAX_CSS_HEIGHT) {
        console.warn(`Total height ${totalHeight}px exceeds CSS limit. Using capped height ${effectiveHeight}px`);
    }

    // Clear existing chunks
    wrapper.innerHTML = '';

    // Calculate which rows to render
    const startRow = Math.floor(visibleChunkStart / chunksPerRow);
    const endRow = Math.min(Math.ceil(visibleChunkEnd / chunksPerRow), totalRows);

    // Render each row individually with correct positioning
    for (let row = startRow; row < endRow; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'chunk-row';
        rowDiv.style.position = 'absolute';
        rowDiv.style.width = '100%';

        // Calculate position accounting for gaps every 10 rows
        const blockIndex = Math.floor(row / rowsPerBlock);
        const topPosition = (row * CHUNK_ROW_HEIGHT) + (blockIndex * CHUNK_BLOCK_GAP);
        rowDiv.style.top = `${topPosition}px`;

        for (let col = 0; col < chunksPerRow; col++) {
            const chunkIndex = row * chunksPerRow + col;
            if (chunkIndex >= chunks.length) break;

            const chunk = chunks[chunkIndex];
            const chunkDiv = createChunkElement(chunk);
            rowDiv.appendChild(chunkDiv);
        }

        wrapper.appendChild(rowDiv);
    }

    // Measure actual row height after first render
    if (wrapper.querySelector('.chunk-row')) {
        const actualRowHeight = wrapper.querySelector('.chunk-row').offsetHeight;
        if (actualRowHeight > 0 && Math.abs(actualRowHeight - CHUNK_ROW_HEIGHT) > 5) {
            CHUNK_ROW_HEIGHT = actualRowHeight;
            // Re-render with correct height
            const newTotalHeight = (totalRows * CHUNK_ROW_HEIGHT) + ((totalBlocks - 1) * CHUNK_BLOCK_GAP);
            wrapper.style.minHeight = `${newTotalHeight}px`;

            // Update all row positions
            wrapper.querySelectorAll('.chunk-row').forEach((rowEl) => {
                const firstChunk = rowEl.querySelector('.chunk');
                if (firstChunk) {
                    const chunkId = parseInt(firstChunk.dataset.chunkId);
                    const row = Math.floor(chunkId / chunksPerRow);
                    const blockIndex = Math.floor(row / rowsPerBlock);
                    const topPosition = (row * CHUNK_ROW_HEIGHT) + (blockIndex * CHUNK_BLOCK_GAP);
                    rowEl.style.top = `${topPosition}px`;
                }
            });
        }
    }
}

// Create a single chunk element
function createChunkElement(chunk) {
    const chunkDiv = document.createElement('div');
    chunkDiv.className = 'chunk';
    chunkDiv.dataset.chunkId = chunk.id;

    // Determine chunk state
    if (chunk.remaining === 0) {
        chunkDiv.classList.add('empty');
    } else if (chunk.remaining < chunk.value) {
        chunkDiv.classList.add('partial');
    }

    // Add value display
    const valueDiv = document.createElement('div');
    valueDiv.className = 'chunk-value';
    valueDiv.textContent = formatCurrency(chunk.remaining);
    chunkDiv.appendChild(valueDiv);

    // Set vertical fill height
    const fillPercentage = (chunk.remaining / chunk.value) * 100;
    chunkDiv.style.setProperty('--fill-height', `${fillPercentage}%`);

    // Note: Event listeners are now handled by event delegation on the wrapper

    return chunkDiv;
}

// Populate shop items
function populateShopItems() {
    const shopItems = document.getElementById('shopItems');
    shopItems.innerHTML = '';

    let currentCategory = '';

    SHOP_ITEMS.forEach((item, index) => {
        if (item.category !== currentCategory) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'shop-category';
            categoryDiv.textContent = item.category;
            shopItems.appendChild(categoryDiv);
            currentCategory = item.category;
        }

        const itemDiv = document.createElement('div');
        itemDiv.className = 'shop-item';
        itemDiv.draggable = true;
        itemDiv.dataset.itemIndex = index;

        itemDiv.innerHTML = `
            <div class="item-icon">${item.icon}</div>
            <div class="item-name">${item.name}</div>
            <div class="item-price">${formatCurrency(item.price)}</div>
        `;

        itemDiv.addEventListener('dragstart', handleDragStart);
        itemDiv.addEventListener('dragend', handleDragEnd);

        shopItems.appendChild(itemDiv);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Tab navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tab = e.currentTarget.dataset.tab;
            const shopPanel = document.getElementById('shopPanel');
            const purchasesPanel = document.getElementById('purchasesPanel');

            if (tab === 'shop') {
                const isActive = shopPanel.classList.contains('active');
                shopPanel.classList.toggle('active');
                purchasesPanel.classList.remove('active');
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                if (!isActive) e.currentTarget.classList.add('active');
            } else if (tab === 'purchases') {
                const isActive = purchasesPanel.classList.contains('active');
                purchasesPanel.classList.toggle('active');
                shopPanel.classList.remove('active');
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                if (!isActive) e.currentTarget.classList.add('active');
            }
        });
    });

    // Wealth level dropdown
    document.getElementById('wealthSelector').addEventListener('change', (e) => {
        const newLevel = e.target.value;

        if (purchaseHistory.length === 0 || newLevel === currentWealth) {
            switchWealthLevel(newLevel);
        } else {
            pendingWealthLevel = newLevel;
            document.getElementById('confirmModal').classList.add('show');
            e.target.value = currentWealth;
        }
    });

    // Modal buttons
    document.getElementById('cancelSwitch').addEventListener('click', () => {
        document.getElementById('confirmModal').classList.remove('show');
        pendingWealthLevel = null;
    });

    document.getElementById('confirmSwitch').addEventListener('click', () => {
        document.getElementById('confirmModal').classList.remove('show');
        if (pendingWealthLevel) {
            switchWealthLevel(pendingWealthLevel);
            pendingWealthLevel = null;
        }
    });

    // Reset button
    document.getElementById('resetBtn').addEventListener('click', () => {
        if (purchaseHistory.length > 0) {
            if (confirm('Are you sure you want to reset all purchases?')) {
                resetWealth();
            }
        } else {
            resetWealth();
        }
    });

    setupTouchSupport();
}

// Switch wealth level
function switchWealthLevel(newLevel) {
    currentWealth = newLevel;
    document.getElementById('wealthSelector').value = newLevel;
    resetWealth();
}

// Touch support for mobile
function setupTouchSupport() {
    const shopItems = document.querySelectorAll('.shop-item');

    shopItems.forEach(item => {
        let touchElement = null;

        item.addEventListener('touchstart', (e) => {
            touchElement = e.target.closest('.shop-item');
            touchElement.classList.add('dragging');
        });

        item.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const elementAtPoint = document.elementFromPoint(touch.clientX, touch.clientY);

            document.querySelectorAll('.drop-target').forEach(el => el.classList.remove('drop-target'));

            const chunk = elementAtPoint?.closest('.chunk');
            if (chunk) chunk.classList.add('drop-target');
        });

        item.addEventListener('touchend', (e) => {
            const touch = e.changedTouches[0];
            const elementAtPoint = document.elementFromPoint(touch.clientX, touch.clientY);
            const chunk = elementAtPoint?.closest('.chunk');

            if (chunk && touchElement) {
                const itemIndex = parseInt(touchElement.dataset.itemIndex);
                const chunkId = parseInt(chunk.dataset.chunkId);
                makePurchase(chunkId, SHOP_ITEMS[itemIndex]);

                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.getElementById('shopPanel').classList.remove('active');
                document.getElementById('purchasesPanel').classList.remove('active');
            }

            document.querySelectorAll('.drop-target').forEach(el => el.classList.remove('drop-target'));
            if (touchElement) touchElement.classList.remove('dragging');
        });
    });
}

// Drag handlers for shop items
function handleDragStart(e) {
    draggedItem = SHOP_ITEMS[parseInt(e.target.dataset.itemIndex)];
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'copy';
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    draggedItem = null;
    // Clear any lingering drop targets
    document.querySelectorAll('.drop-target').forEach(el => el.classList.remove('drop-target'));
}

// Make a purchase
function makePurchase(startChunkId, item) {
    let remainingCost = item.price;
    let currentChunkId = startChunkId;
    const purchasedChunks = [];

    // Quick check using cached total if available
    const totalRemaining = chunks.reduce((sum, chunk) => sum + chunk.remaining, 0);
    if (remainingCost > totalRemaining) {
        alert(`Not enough money! You need ${formatCurrency(remainingCost)} but only have ${formatCurrency(totalRemaining)} remaining.`);
        return;
    }

    // Update chunk data
    while (remainingCost > 0) {
        if (currentChunkId >= chunks.length) currentChunkId = 0;

        const chunk = chunks[currentChunkId];

        if (chunk.remaining > 0) {
            const deduction = Math.min(chunk.remaining, remainingCost);
            chunk.remaining -= deduction;
            remainingCost -= deduction;

            chunk.purchases.push({
                name: item.name,
                icon: item.icon,
                amount: deduction
            });

            purchasedChunks.push(currentChunkId);
        }

        currentChunkId++;

        if (currentChunkId - startChunkId > chunks.length * 2) {
            console.error('Purchase loop exceeded safe limit');
            break;
        }
    }

    totalSpent += item.price;

    purchaseHistory.push({
        name: item.name,
        price: item.price,
        icon: item.icon,
        timestamp: Date.now()
    });

    // Update UI - but only update visible chunks immediately
    updateStats();
    updatePurchasesList();
    updateVisibleChunksAfterPurchase(purchasedChunks);
    animatePurchasedChunks(purchasedChunks);
}

// Update only visible affected chunks after purchase
function updateVisibleChunksAfterPurchase(chunkIds) {
    // Only update chunks that are currently visible in the DOM
    const visibleChunkIds = new Set(chunkIds.filter(id =>
        id >= visibleChunkStart && id < visibleChunkEnd
    ));

    visibleChunkIds.forEach(chunkId => {
        const chunk = chunks[chunkId];
        const chunkElement = document.querySelector(`[data-chunk-id="${chunkId}"]`);

        if (chunkElement) {
            const valueElement = chunkElement.querySelector('.chunk-value');
            if (valueElement) valueElement.textContent = formatCurrency(chunk.remaining);

            const fillPercentage = (chunk.remaining / chunk.value) * 100;
            chunkElement.style.setProperty('--fill-height', `${fillPercentage}%`);

            chunkElement.classList.remove('empty', 'partial');
            if (chunk.remaining === 0) {
                chunkElement.classList.add('empty');
            } else if (chunk.remaining < chunk.value) {
                chunkElement.classList.add('partial');
            }
        }
    });

    // If purchased chunks span beyond visible range, re-render will happen on scroll
}

// Animate purchased chunks (only visible ones)
function animatePurchasedChunks(chunkIds) {
    if (chunkIds.length === 0) return;

    // Only animate visible chunks for performance
    const visibleChunkIds = chunkIds.filter(id =>
        id >= visibleChunkStart && id < visibleChunkEnd
    );

    if (visibleChunkIds.length === 0) return;

    const totalAnimationTime = 1000;
    const animationDuration = 600;
    const availableTimeForStagger = totalAnimationTime - animationDuration;
    const delayPerChunk = visibleChunkIds.length > 1 ? availableTimeForStagger / (visibleChunkIds.length - 1) : 0;

    visibleChunkIds.forEach((chunkId, index) => {
        setTimeout(() => {
            const chunkElement = document.querySelector(`[data-chunk-id="${chunkId}"]`);
            if (chunkElement) {
                chunkElement.classList.add('purchasing');
                setTimeout(() => chunkElement.classList.remove('purchasing'), animationDuration);
            }
        }, index * delayPerChunk);
    });
}

// Update stats
function updateStats() {
    const config = WEALTH_LEVELS[currentWealth];
    const remaining = chunks.reduce((sum, chunk) => sum + chunk.remaining, 0);
    const percentage = ((remaining / config.total) * 100).toFixed(1);

    document.getElementById('totalWealth').textContent = formatCurrency(config.total);
    document.getElementById('remaining').textContent = formatCurrency(remaining);
    document.getElementById('spent').textContent = formatCurrency(totalSpent);
    document.getElementById('percentage').textContent = `${percentage}%`;
}

// Reset wealth
function resetWealth() {
    totalSpent = 0;
    purchaseHistory = [];
    createChunks();
    updateStats();
    updatePurchasesList();
}

// Update purchases list
function updatePurchasesList() {
    const purchasesList = document.getElementById('purchasesList');

    if (purchaseHistory.length === 0) {
        purchasesList.innerHTML = '<p class="empty-message">No purchases yet. Start shopping!</p>';
        return;
    }

    purchasesList.innerHTML = '';

    [...purchaseHistory].reverse().forEach(purchase => {
        const purchaseDiv = document.createElement('div');
        purchaseDiv.className = 'purchase-item';

        purchaseDiv.innerHTML = `
            <div class="purchase-info">
                <div class="purchase-name">${purchase.name}</div>
                <div class="purchase-price">${formatCurrency(purchase.price)}</div>
            </div>
            <div class="purchase-icon">${purchase.icon}</div>
        `;

        purchasesList.appendChild(purchaseDiv);
    });
}

// Format currency
function formatCurrency(amount) {
    if (amount >= 1000000000) {
        return `£${(amount / 1000000000).toFixed(2)}B`;
    } else if (amount >= 1000000) {
        return `£${(amount / 1000000).toFixed(2)}M`;
    } else if (amount >= 1000) {
        return `£${(amount / 1000).toFixed(0)}k`;
    } else {
        return `£${amount.toFixed(0)}`;
    }
}

document.addEventListener('DOMContentLoaded', init);
