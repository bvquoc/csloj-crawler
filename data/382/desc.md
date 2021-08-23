Trường Chuyên Sơn La cần chọn một đội văn nghệ gồm $5$ người để đi thi “Giai điệu tuổi hồng” do Sở Giáo dục và Đào tạo kết hợp với tỉnh Đoàn tổ chức.

Theo số liệu từ BGH thì nhà trường có $n$ học sinh đánh số từ $1$ đến $n$, học sinh thứ $i$ có chiều cao là một số nguyên dương $h_i$. Kinh nghiệm hàng năm cho thấy đội đi thi sẽ có kết quả cao nếu có sự đồng đều về chiều cao, tức là chênh lệch chiều cao giữa bạn cao nhất và bạn thấp nhất trong $5$ bạn được chọn là nhỏ nhất. Bạn hãy giúp nhà trường chọn ra một đội $5$ người “đồng đều” nhất có thể để đi thi nhé.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $n$;
- Dòng thứ hai chứa $n$ số nguyên dương $h_1, h_2, …, h_n$.

Hai số liên tiếp trên một dòng được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Ghi trên một dòng số nguyên là chênh lệch chiều cao nhỏ nhất của bạn cao nhất và bạn thấp nhất trong đội văn nghệ được chọn.

## Ví dụ:
### Dữ liệu vào:
```
7
150 155 161 172 170 152 169
```

### Dữ liệu ra:
```
17
```

### Giải thích:
- Chọn $5$ học sinh có chiều cao lần lượt là $155, 161, 172, 170, 169$  đi thi sẽ có chênh lệch chiều cao nhỏ nhất bằng $172 – 155 = 17$.

## Giới hạn:
- $5 ≤ n ≤ 10^5$;  1 ≤ h_i ≤ 10^9$.