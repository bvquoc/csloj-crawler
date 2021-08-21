**<center>NGUỒN : VNU-OI 2020</center>**

Vào năm $3000$, các thí sinh tham dự kỳ thi tốt nghiệp THPT không còn phải điền tay đáp án nữa mà tất cả đều phải lập trình trả lời các câu hỏi một cách tự động và điền vào một file excel để nộp ban tổ chức. Hội đồng ra đề thi chuẩn bị sẵn $n$ câu hỏi để chương trình các thí sinh tương tác. Đề thi là các câu hỏi trắc nghiệm, mỗi câu hỏi có $k\ (2 ≤ k ≤ 26)$ đáp án trả lời `A, B, C, D, …`. Kết quả cần đưa ra là một dãy gồm $n$ giá trị $a_1, a_2, …, a_n$ với $a_i$ là một ký tự in hoa tương ứng với câu trả lời cho câu hỏi thứ $i$. Để tránh hiện tượng thí sinh chọn bừa một đáp án nhiều lần, ban tổ chức đưa ra $m$ yêu cầu ràng buộc. Mỗi yêu cầu là hai số nguyên dương $l, r\ (l < r)$ tương ứng các giá trị $a_l, a_{l + 1}, …, a_r$ không được tất cả giống nhau.

**Yêu cầu:** Hãy lập trình tính toán xem với yêu cầu của ban tổ chức, xác định liệu có bao nhiêu khả năng cho đáp án của thí sinh đưa ra hợp lệ theo yêu cầu. Đưa ra theo module $10^9 + 7$.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên không âm $n, m, k$;
- $m$ dòng tiếp theo, dòng thứ $i$ chứa hai số nguyên dương $l_i, r_i\ (l_i< r_i)$ xác định yêu cầu thứ $i$.

## Dữ liệu ra:
- In ra một số nguyên duy nhất là kết quả tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
4 2 2
1 3
2 4
```

#### Dữ liệu ra:
```
10
```

**Giải thích:** `AABA; AABB; ABAB; ABAA; ABBA; BBAB; BBAA; BABA; BABB; BAAB`.

## Giới hạn:
- $20\%$ số điểm có $m ≤ 10; k^n ≤ 1000000$;
- $20\%$ số điểm khác có $r_i < l_j, ∀ i < j; n, m ≤ 5000$;
- $30\%$ số điểm khác có $n, m ≤ 5000$;
- $30\%$ số điểm còn lại có $n, m ≤ 10^5$.