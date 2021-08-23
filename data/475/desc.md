**<center>(Đề đề xuất DHBB 2017 của THPT CHUYÊN CHUYÊN QUỐC HỌC - HUẾ)</center>**

Sahra là một kế toán tại doanh nghiệp tư nhân do Bobby làm giám đốc. Bobby là một ông chủ rất thích làm từ thiện, ông đã quyết định thu nhập của những ngày nào mang số thứ tự là số nguyên tố sẽ cho các em nhỏ ở vùng khó khăn mua sách vở (nếu thu nhập hôm đó là dương), ngày bắt đầu lập công ty mang số thứ tự là $1$. Ngoài ra, Bobby rất khắt khe trong công việc và luôn muốn biết thu nhập của công ty trong khoảng thời gian từ ngày thứ $X$ đến ngày thứ $Y$. Nhưng ông có một tính rất đãng trí nên luôn hỏi Sahra rất ngẫu hứng. Bạn hãy viết chương trình giúp Sahra tính tổng thu nhập của công ty dựa trên các câu hỏi của Bobby là từ ngày thứ $X$ đến ngày thứ $Y$ công ty thu được bao nhiêu (Thu nhập không tính những ngày có số thứ tự là số nguyên tố nếu hôm đó có thu nhập dương).

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên $n$ là số ngày mà công ty đã đi vào hoạt động;
- Dòng thứ hai chứa $n$ số nguyên, $a_i$ tương ứng là thu nhập ngày thứ $i$ của công ty;
- Dòng thứ ba chứa số nguyên $Q$, số truy vấn của Bobby;
- $Q$ dòng tiếp theo, dòng thứ $i$ chứa hai số nguyên $X_i$ và $Y_i$ là khoảng truy vấn của Bobby.

Hai số liên tiếp trên cùng một dòng được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Gồm $Q$ dòng, dòng thứ $i$ là kết quả của truy vấn thứ $i$.

## Ví dụ:
### Dữ liệu vào:
```
5
-2 5 8 6 9
1
3 5
```

### Dữ liệu ra:
```
6
```

### Dữ liệu vào:
```
10
-2 5 8 6 9 -3 -5 6 8 10
3
1 3
5 9
1 10
```

### Dữ liệu ra:
```
-2
6
20
```

### Giới hạn:
- $1 ≤ n, Q ≤ 50000; |a_i| ≤ 42000; 1 ≤ X_i ≤ Y_i ≤ n$.