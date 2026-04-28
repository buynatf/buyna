// Data
const projects = [
    {
        id: 1,
        name: 'Офисын барилга - БЗД',
        location: 'Баянзүрх дүүрэг',
        startDate: '2026-01-15',
        endDate: '2026-08-30',
        budget: 120000000,
        spent: 102000000,
        progress: 85,
        manager: 'Б. Батаа',
        workers: 45,
        status: 'active'
    },
    {
        id: 2,
        name: 'Орон сууцны байр - СХД',
        location: 'Сүхбаатар дүүрэг',
        startDate: '2026-02-01',
        endDate: '2026-12-31',
        budget: 250000000,
        spent: 162500000,
        progress: 65,
        manager: 'Д. Дорж',
        workers: 78,
        status: 'active'
    },
    {
        id: 3,
        name: 'Худалдааны төв',
        location: 'Чингэлтэй дүүрэг',
        startDate: '2025-09-01',
        endDate: '2026-03-31',
        budget: 180000000,
        spent: 175000000,
        progress: 97,
        manager: 'Ц. Цэцэг',
        workers: 32,
        status: 'active'
    }
];

const materials = [
    { id: 1, name: 'Цемент М400', category: 'Цемент', quantity: 450, unit: 'уут', minStock: 200, price: 12500, supplier: 'Монгол Цемент ХХК', lastUpdated: '2026-04-18' },
    { id: 2, name: 'Төмөр 12мм', category: 'Төмөр', quantity: 8500, unit: 'кг', minStock: 5000, price: 2800, supplier: 'Төмөр Эрдэнэ ХХК', lastUpdated: '2026-04-19' },
    { id: 3, name: 'Тоосго', category: 'Шавар', quantity: 120, unit: 'тонн', minStock: 150, price: 15000, supplier: 'Барилгын материал ХХК', lastUpdated: '2026-04-15' },
    { id: 4, name: 'Модон хавтан 18мм', category: 'Мод', quantity: 350, unit: 'ширхэг', minStock: 200, price: 45000, supplier: 'Модон Эко ХХК', lastUpdated: '2026-04-20' },
    { id: 5, name: 'Будаг цагаан', category: 'Будаг', quantity: 85, unit: 'литр', minStock: 100, price: 18000, supplier: 'Өнгө Будаг ХХК', lastUpdated: '2026-04-17' }
];

const employees = [
    { id: 1, name: 'Б. Батаа', position: 'Төслийн менежер', department: 'Удирдлага', phone: '99001122', email: 'bataa@company.mn', salary: 2500000, joinDate: '2024-03-15', project: 'Офисын барилга - БЗД', status: 'active' },
    { id: 2, name: 'Д. Дорж', position: 'Төслийн менежер', department: 'Удирдлага', phone: '99112233', email: 'dorj@company.mn', salary: 2500000, joinDate: '2024-01-10', project: 'Орон сууцны байр - СХД', status: 'active' },
    { id: 3, name: 'Ц. Цэцэг', position: 'Инженер', department: 'Техник', phone: '99223344', email: 'tsetseg@company.mn', salary: 1800000, joinDate: '2023-08-20', project: 'Худалдааны төв', status: 'active' },
    { id: 4, name: 'С. Сүхбат', position: 'Барилгын ажилчин', department: 'Барилга', phone: '99334455', email: 'sukhbat@company.mn', salary: 1200000, joinDate: '2025-02-01', project: 'Офисын барилга - БЗД', status: 'active' },
    { id: 5, name: 'Г. Ганбат', position: 'Цахилгаанчин', department: 'Техник', phone: '99445566', email: 'ganbat@company.mn', salary: 1500000, joinDate: '2024-11-15', project: 'Орон сууцны байр - СХД', status: 'onLeave' },
    { id: 6, name: 'Н. Нарангэрэл', position: 'Нягтлан бодогч', department: 'Санхүү', phone: '99556677', email: 'narangerel@company.mn', salary: 1600000, joinDate: '2023-05-10', project: 'Төв оффис', status: 'active' }
];

const transactions = [
    { id: 1, date: '2026-04-15', description: 'Төсөл 1 - Эхний төлбөр', project: 'Офисын барилга - БЗД', type: 'income', category: 'Урьдчилгаа', amount: 50000000, status: 'completed' },
    { id: 2, date: '2026-04-16', description: 'Цемент худалдан авалт', project: 'Орон сууцны байр - СХД', type: 'expense', category: 'Материал', amount: 8500000, status: 'completed' },
    { id: 3, date: '2026-04-17', description: 'Цалин - 4-р сар', project: 'Бүх төслүүд', type: 'expense', category: 'Цалин', amount: 42000000, status: 'completed' },
    { id: 4, date: '2026-04-18', description: 'Төсөл 2 - Дунд төлбөр', project: 'Орон сууцны байр - СХД', type: 'income', category: 'Үндсэн', amount: 75000000, status: 'pending' },
    { id: 5, date: '2026-04-19', description: 'Тоног төхөөрөмж түрээс', project: 'Худалдааны төв', type: 'expense', category: 'Тоног төхөөрөмж', amount: 5500000, status: 'completed' }
];

// Initialize Charts
let revenueChart, materialChart, projectChart, financeChart, expenseChart;

function initCharts() {
    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        revenueChart = new Chart(revenueCtx, {
            type: 'line',
            data: {
                labels: ['1-р сар', '2-р сар', '3-р сар', '4-р сар', '5-р сар', '6-р сар'],
                datasets: [{
                    label: 'Орлого',
                    data: [45, 52, 48, 61, 55, 67],
                    borderColor: '#3b82f6',
                    tension: 0.4
                }, {
                    label: 'Зардал',
                    data: [30, 35, 32, 38, 40, 42],
                    borderColor: '#10b981',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2
            }
        });
    }

    // Material Chart
    const materialCtx = document.getElementById('materialChart');
    if (materialCtx) {
        materialChart = new Chart(materialCtx, {
            type: 'pie',
            data: {
                labels: ['Цемент', 'Төмөр', 'Мод', 'Бусад'],
                datasets: [{
                    data: [30, 25, 20, 25],
                    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2
            }
        });
    }

    // Project Chart
    const projectCtx = document.getElementById('projectChart');
    if (projectCtx) {
        projectChart = new Chart(projectCtx, {
            type: 'bar',
            data: {
                labels: ['Төсөл 1', 'Төсөл 2', 'Төсөл 3', 'Төсөл 4', 'Төсөл 5'],
                datasets: [{
                    label: 'Явц %',
                    data: [85, 65, 45, 90, 30],
                    backgroundColor: '#3b82f6'
                }, {
                    label: 'Төсөв (сая ₮)',
                    data: [120, 95, 150, 80, 200],
                    backgroundColor: '#10b981'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2
            }
        });
    }

    // Finance Chart
    const financeCtx = document.getElementById('financeChart');
    if (financeCtx) {
        financeChart = new Chart(financeCtx, {
            type: 'bar',
            data: {
                labels: ['1-р сар', '2-р сар', '3-р сар', '4-р сар'],
                datasets: [{
                    label: 'Орлого',
                    data: [85, 92, 78, 125],
                    backgroundColor: '#10b981'
                }, {
                    label: 'Зардал',
                    data: [62, 68, 55, 56],
                    backgroundColor: '#ef4444'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2
            }
        });
    }

    // Expense Chart
    const expenseCtx = document.getElementById('expenseChart');
    if (expenseCtx) {
        expenseChart = new Chart(expenseCtx, {
            type: 'bar',
            data: {
                labels: ['Материал', 'Цалин', 'Тоног төхөөрөмж', 'Бусад'],
                datasets: [{
                    label: 'Дүн',
                    data: [45, 42, 18, 12],
                    backgroundColor: '#3b82f6'
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2
            }
        });
    }
}

// Navigation
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Set active nav item
    event.target.closest('.nav-item').classList.add('active');
    
    // Load section data
    if (sectionId === 'projects') {
        loadProjects();
    } else if (sectionId === 'inventory') {
        loadInventory();
    } else if (sectionId === 'employees') {
        loadEmployees();
    } else if (sectionId === 'finance') {
        loadTransactions();
    }
}

// Load Projects
function loadProjects() {
    const projectsList = document.getElementById('projectsList');
    projectsList.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = `
            <div class="project-card">
                <div class="project-header">
                    <div>
                        <h3 class="project-title">${project.name}</h3>
                        <p class="project-location">
                            <i class="fas fa-map-marker-alt"></i> ${project.location}
                        </p>
                    </div>
                    <span class="status-badge ${project.status}">Идэвхитэй</span>
                </div>
                <div class="project-details">
                    <div class="detail-item">
                        <i class="fas fa-calendar"></i>
                        <div>
                            <p style="font-size: 0.75rem; color: #9ca3af;">Эхлэх</p>
                            <p>${project.startDate}</p>
                        </div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-calendar"></i>
                        <div>
                            <p style="font-size: 0.75rem; color: #9ca3af;">Дуусах</p>
                            <p>${project.endDate}</p>
                        </div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-dollar-sign"></i>
                        <div>
                            <p style="font-size: 0.75rem; color: #9ca3af;">Төсөв</p>
                            <p>${(project.budget / 1000000).toFixed(0)}М ₮</p>
                        </div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-users"></i>
                        <div>
                            <p style="font-size: 0.75rem; color: #9ca3af;">Ажилчид</p>
                            <p>${project.workers} хүн</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 0.5rem;">
                        <span>Явц: ${project.progress}%</span>
                        <span>Зарцуулсан: ${(project.spent / 1000000).toFixed(1)}М / ${(project.budget / 1000000).toFixed(0)}М ₮</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${project.progress}%"></div>
                    </div>
                </div>
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #e5e7eb;">
                    <p style="font-size: 0.875rem; color: #6b7280;">
                        <strong>Менежер:</strong> ${project.manager}
                    </p>
                </div>
            </div>
        `;
        projectsList.innerHTML += projectCard;
    });
}

// Load Inventory
function loadInventory() {
    const inventoryBody = document.getElementById('inventoryBody');
    inventoryBody.innerHTML = '';
    
    materials.forEach(material => {
        const isLowStock = material.quantity < material.minStock;
        const row = `
            <tr>
                <td>
                    <div style="display: flex; align-items: center;">
                        <i class="fas fa-box" style="margin-right: 0.75rem; color: #9ca3af;"></i>
                        <div>
                            <p style="font-weight: 500;">${material.name}</p>
                            <p style="font-size: 0.75rem; color: #6b7280;">Шинэчилсэн: ${material.lastUpdated}</p>
                        </div>
                    </div>
                </td>
                <td><span class="badge" style="background: #f3f4f6; color: #374151;">${material.category}</span></td>
                <td>
                    <p style="font-weight: 500;">${material.quantity.toLocaleString()} ${material.unit}</p>
                    <p style="font-size: 0.75rem; color: #6b7280;">Мин: ${material.minStock}</p>
                </td>
                <td style="font-weight: 500;">${material.price.toLocaleString()} ₮</td>
                <td style="font-size: 0.875rem;">${material.supplier}</td>
                <td>
                    ${isLowStock 
                        ? '<span class="badge low-stock"><i class="fas fa-exclamation-triangle"></i> Дутагдалтай</span>'
                        : '<span class="badge in-stock">Хангалттай</span>'}
                </td>
                <td>
                    <div class="action-btns">
                        <button class="action-btn add"><i class="fas fa-plus" style="color: #10b981;"></i></button>
                        <button class="action-btn remove"><i class="fas fa-minus" style="color: #ef4444;"></i></button>
                    </div>
                </td>
            </tr>
        `;
        inventoryBody.innerHTML += row;
    });
}

// Filter Inventory
function filterInventory() {
    const searchTerm = document.getElementById('inventorySearch').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    
    const filtered = materials.filter(material => {
        const matchesSearch = material.name.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || material.category === category;
        return matchesSearch && matchesCategory;
    });
    
    const inventoryBody = document.getElementById('inventoryBody');
    inventoryBody.innerHTML = '';
    
    filtered.forEach(material => {
        const isLowStock = material.quantity < material.minStock;
        const row = `
            <tr>
                <td>
                    <div style="display: flex; align-items: center;">
                        <i class="fas fa-box" style="margin-right: 0.75rem; color: #9ca3af;"></i>
                        <div>
                            <p style="font-weight: 500;">${material.name}</p>
                            <p style="font-size: 0.75rem; color: #6b7280;">Шинэчилсэн: ${material.lastUpdated}</p>
                        </div>
                    </div>
                </td>
                <td><span class="badge" style="background: #f3f4f6; color: #374151;">${material.category}</span></td>
                <td>
                    <p style="font-weight: 500;">${material.quantity.toLocaleString()} ${material.unit}</p>
                    <p style="font-size: 0.75rem; color: #6b7280;">Мин: ${material.minStock}</p>
                </td>
                <td style="font-weight: 500;">${material.price.toLocaleString()} ₮</td>
                <td style="font-size: 0.875rem;">${material.supplier}</td>
                <td>
                    ${isLowStock 
                        ? '<span class="badge low-stock"><i class="fas fa-exclamation-triangle"></i> Дутагдалтай</span>'
                        : '<span class="badge in-stock">Хангалттай</span>'}
                </td>
                <td>
                    <div class="action-btns">
                        <button class="action-btn add"><i class="fas fa-plus" style="color: #10b981;"></i></button>
                        <button class="action-btn remove"><i class="fas fa-minus" style="color: #ef4444;"></i></button>
                    </div>
                </td>
            </tr>
        `;
        inventoryBody.innerHTML += row;
    });
}

// Load Employees
function loadEmployees() {
    const employeesList = document.getElementById('employeesList');
    employeesList.innerHTML = '';
    
    employees.forEach(employee => {
        const statusClass = employee.status === 'active' ? 'in-stock' : 'badge';
        const statusText = employee.status === 'active' ? 'Идэвхитэй' : 'Чөлөөтэй';
        
        const employeeCard = `
            <div class="employee-card">
                <div class="employee-header">
                    <div class="employee-info">
                        <div class="employee-avatar">${employee.name.charAt(0)}</div>
                        <div class="employee-details">
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <h3 class="employee-name">${employee.name}</h3>
                                <span class="badge ${statusClass}">${statusText}</span>
                            </div>
                            <p class="employee-position">${employee.position}</p>
                            <div class="employee-meta">
                                <div class="meta-item">
                                    <i class="fas fa-briefcase"></i> ${employee.department}
                                </div>
                                <div class="meta-item">
                                    <i class="fas fa-phone"></i> ${employee.phone}
                                </div>
                                <div class="meta-item">
                                    <i class="fas fa-envelope"></i> ${employee.email}
                                </div>
                                <div class="meta-item">
                                    <i class="fas fa-project-diagram"></i> ${employee.project}
                                </div>
                            </div>
                            <div class="employee-footer">
                                <div class="footer-item">
                                    <p>Цалин</p>
                                    <p>${employee.salary.toLocaleString()} ₮</p>
                                </div>
                                <div class="footer-item">
                                    <p>Элссэн огноо</p>
                                    <p>${employee.joinDate}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        employeesList.innerHTML += employeeCard;
    });
}

// Load Transactions
function loadTransactions() {
    const transactionsBody = document.getElementById('transactionsBody');
    transactionsBody.innerHTML = '';
    
    transactions.forEach(transaction => {
        const typeIcon = transaction.type === 'income' ? 'arrow-up' : 'arrow-down';
        const typeColor = transaction.type === 'income' ? '#10b981' : '#ef4444';
        const statusClass = transaction.status === 'completed' ? 'in-stock' : 'badge';
        const statusText = transaction.status === 'completed' ? 'Гүйцэтгэсэн' : 'Хүлээгдэж буй';
        
        const row = `
            <tr>
                <td>
                    <div style="display: flex; align-items: center; font-size: 0.875rem; color: #6b7280;">
                        <i class="fas fa-calendar" style="margin-right: 0.5rem; color: #9ca3af;"></i>
                        ${transaction.date}
                    </div>
                </td>
                <td style="font-weight: 500;">${transaction.description}</td>
                <td style="font-size: 0.875rem; color: #6b7280;">${transaction.project}</td>
                <td><span class="badge" style="background: #f3f4f6; color: #374151;">${transaction.category}</span></td>
                <td>
                    <div style="display: flex; align-items: center; justify-content: flex-end;">
                        <i class="fas fa-${typeIcon}" style="margin-right: 0.5rem; color: ${typeColor};"></i>
                        <span style="font-weight: 600; color: ${typeColor};">
                            ${transaction.type === 'income' ? '+' : '-'}${(transaction.amount / 1000000).toFixed(1)}М ₮
                        </span>
                    </div>
                </td>
                <td style="text-align: center;">
                    <span class="badge ${statusClass}" style="${transaction.status === 'pending' ? 'background: #fef3c7; color: #92400e;' : ''}">${statusText}</span>
                </td>
            </tr>
        `;
        transactionsBody.innerHTML += row;
    });
}

// Sidebar Toggle
document.getElementById('toggleSidebar').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
});

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    initCharts();
    loadProjects();
    loadInventory();
    loadEmployees();
    loadTransactions();
});