**<center>NGUỒN: Bài tập thầy Lê Minh Hoàng ôn Tại Hải Phòng T11/2020</center>**

Ngân hàng câu hỏi của trường SuperKids có $10^9$ bài toán đánh số từ $1$ tới $10^9$, bài toán thứ $𝑖$ có độ khó là $𝑖$. Giáo sư 𝑋 muốn chọn $𝑘$ bài toán khác nhau trong số đó để làm một đề thi sao cho tổng độ khó của các bài toán được  chọn đúng bằng $𝑛$. Hãy cho biết giáo sư 𝑋 có bao nhiêu cách chọn. (Hai cách chọn được gọi là khác nhau nếu có một bài toán được chọn trong một cách nhưng không được chọn trong cách còn lại).

## Dữ liệu vào:
- Dòng đầu ghi số nguyên dương $𝑇 ≤ 10$ là số test;
- $𝑇$ dòng tiếp theo, mỗi dòng chứa hai số nguyên dương $𝑘, 𝑛\ (𝑘 ≤ 10; 𝑛 ≤ 10^9)$ ứng với một test.

## Dữ liệu ra:
- Ứng với mỗi test, ghi ra một số nguyên duy nhất trên một dòng là số dư của kết quả tìm được khi chia cho $1000000007\ (10^9 + 7)$.

## Ví dụ:
### Dữ liệu vào:
```
2
3 10
2 8
```

### Dữ liệu ra:
```
4
3
```

### Giải thích:
- Test $1$:
    - $1 + 2 + 7 = 10$;
    - $1 + 3 + 6 = 10$;
    - $1 + 4 + 5 = 10$;
    - $2 + 3 + 5 = 10$.

- Test $2$:
    - S1 + 7 = 8$;
    - S2 + 6 = 8$;
    - S3 + 5 = 8$.