// 使用方法: node script/test-prod.js [YOUR_VERCEL_URL]
// 示例: node script/test-prod.js https://vercel-node-api.vercel.app/api

const args = process.argv.slice(2);
// 默认 URL，如果没有提供参数
const BASE_URL = args[0] || 'https://vercel-node-crkigqm9b-xiyueyezibiles-projects.vercel.app'; 

// 确保 URL 不以 / 结尾
const normalizeUrl = (url) => url.replace(/\/$/, '');

const targetUrl = normalizeUrl(BASE_URL);

console.log(`🚀 开始测试接口: ${targetUrl}`);

async function testEndpoint(endpoint) {
  const url = `${targetUrl}${endpoint}`;
  console.log(`\n----------------------------------------`);
  console.log(`📡 请求: ${url}`);
  
  try {
    const start = Date.now();
    const response = await fetch(url);
    const duration = Date.now() - start;

    console.log(`✅ 状态码: ${response.status} ${response.statusText}`);
    console.log(`⏱️ 耗时: ${duration}ms`);

    // const contentType = response.headers.get('content-type');
    // if (contentType && contentType.includes('application/json')) {
    //   const data = await response.json();
    //   console.log('📦 响应数据:');
    //   console.dir(data, { depth: null, colors: true });
    // } else {
    //   const text = await response.text();
    //   console.log('📄 响应文本:', text);
    // }

  } catch (error) {
    console.error(`❌ 请求失败: ${error.message}`);
  }
}

async function runTests() {
  // 测试根路径
//   await testEndpoint('/');
  
  // 测试 API 路径
  await testEndpoint('/api');
  
  // 测试健康检查
  await testEndpoint('/api/health');
}

runTests();
