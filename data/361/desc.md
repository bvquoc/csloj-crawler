Kỳ thi chọn học sinh giỏi Tin học trường THPT Chuyên Sơn La có $N$ thí sinh tham gia, các thí sinh được đánh số từ $1$ đến $N$. Mỗi thí sinh phải làm ba bài thi, điểm của mỗi bài thi của thí sinh là một số thực trong đoạn $[0; 10]$ (làm tròn đến hàng phần trăm) và điểm của mỗi thí sinh là tổng điểm của ba bài thi của thi sinh đó. Bạn được yêu cầu lập một chương trình giúp Ban tổ chức chọn ra thí sinh có điểm cao nhất để trao giải đặc biệt.

## Dữ liệu vào:
- Dòng đầu là số $N$ (Số lượng thí sinh tham gia dự thi);
- $N$ dòng tiếp theo, dòng thứ $i$ chứa ba số thực $a_i, b_i, c_i$ là điểm ba bài thi của thí sinh thứ $i$ (mỗi số cách nhau bởi một dấu cách).

## Dữ liệu ra:
- Số thứ tự của thí sinh có tổng điểm cao nhất, nếu có nhiều thí sinh bằng điểm nhau thì liệt kê theo thứ tự tăng dần của số thứ tự (mỗi số cách nhau bởi một dấu cách)

## Ví dụ:
### Dữ liệu vào:
```
2
8.00 7.50 9.00
8.00 8.00 9.00
```

### Dữ liệu ra:
```
2
```

### Dữ liệu vào:
```
3
8.50 9.00 9.00
8.00 7.25 9.00
9.50 9.00 8.00
```

### Dữ liệu ra:
```
1 3
```

### Giải thích:
- Trong ví dụ $2$, thí sinh thứ nhất và thí sinh thứ $3$ cùng có tổng điểm cao nhất là $26.50$

## Giới hạn:
- $40\%$ số test tương ứng với $40\%$ số điểm của bài toán có $1 ≤ N ≤ 100$
- $40\%$ số test khác tương ứng với $40\%$ số điểm của bài toán có $1 ≤ N ≤ 1000$
- $20\%$ số test còn lại tương ứng với $20\%$ số điểm của bài toán có $1 ≤ N ≤ 10^5$