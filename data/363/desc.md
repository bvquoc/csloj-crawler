Tí rất yêu thích và học giỏi môn Tin học, vì vậy năm nay Tí đã đăng ký tham dự kỳ thi HSG lớp $10$ do nhà trường tổ chức. Vào buổi thi, sau khi nhận được đề Tí thấy đề thi có $n$ bài, bài thứ $i$ có số điểm là $d_i$. Sau khi phân tích kỹ các bài Tí thấy với khả năng của mình thì thời gian để làm mỗi bài là như nhau và mình chỉ đủ thời gian làm $k$ bài. Tuy nhiên quy định của BTC lại không cho phép thí sinh bỏ qua hai bài liên tiếp (nếu thí sinh bỏ qua bài thứ $i$ và bài thứ $i + 1$ thì tất cả các bài từ bài thứ $i$ trở đi đều không được tính điểm). Tất nhiên với trí thông minh của mình thì Tí có thể lựa chọn các bài để làm sao cho đạt được số điểm tối đa. Em hãy tính xem, số điểm tối đa Tí có thể đạt là bao nhiêu?

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $n$ và $k$;
- Dòng thứ hai chứa $n$ số nguyên dương $d_1, d_2, …, d_n$.

Hai số liên tiếp trên một dòng được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Một số nguyên duy nhất là số điểm tối đa Tí có thể đạt được.

## Ví dụ:
#### Dữ liệu vào:
```
5 2
7 3 3 9 10
```

#### Dữ liệu ra:
```
12
```

#### Giải thích:-
- Tí chọn làm các bài số $2$ và số $4$, số điểm đạt được là $3 + 9 = 12$.

## Giới hạn:
- $1 ≤ n, k ≤ 25; 1 ≤ d_1, d_2, …, d_n ≤ 1000$.