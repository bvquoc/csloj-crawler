**<center>NGUỒN: VOI 2019 - 2020</center>**
**<center>Test không chính thức (thầy Hồ Đắc Phương)</center>**

Alice vừa đoạt giải quán quân trong một kỳ thi lập trình danh giá. Ban tổ chức trao thưởng thông qua một trò chơi như sau: Có $n$ thẻ xếp trên một hàng dài, trên mỗi thẻ xếp một số nguyên dương. Ban tổ chức cho Alice thực hiện nhiều bước để chọn ra đúng $k$ cặp thẻ , mỗi bước thực hiện theo một trong các quy tắc sau:
1. Chọn hai thẻ đầu hàng;
2. Chọn hai thẻ cuối hàng;
3. Chọn một thẻ đầu hàng và một thẻ cuối hàng;
4. Loại một thẻ đầu hàng ra khỏi hàng;
5. Loại một thẻ cuối hàng ra khỏi hàng.

Sau mối bước, nếu chọn được hai thẻ thì loại hai thẻ đó ra khỏi hàng và Alice nhận được số tiền thưởng bằng giá trị tuyệt đối của hiệu hai số ghi trên hai thẻ đó.

**Yêu cầu:** Hãy giúp Alice tìm cách chơi chọn đúng $k$ cặp thẻ để đạt được tổng số tiền thưởng là lớn nhất.

## Dữ liệu vào:
- Dòng thứ nhất chứa hai số nguyên dương $n$ và $k$ $(2\times k\le n)$;
- Dòng thứ hai chứa $n$ số nguyên dương là giá trị ghi trên từng thẻ, mỗi thẻ một số tương ứng lần lượt từ đầu hàng. Các số có giá trị không vượt quá $10^9$.
Các số trên cùng một dòng cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là tổng tiền thưởng lớn nhất tìm được.

## Giới hạn:
- Có $40\%$ số test ứng với $40\%$ số điểm của bài thỏa mãn điều kiện: $n\le 300, k\le 2$;
- $40\%$ số test khác ứng với $40\%$ số điểm của bài thỏa mãn điều kiện: $n\le 30, 2\times k=n$;
- $20\%$ số test còn lại ứng với $20\%$ số điểm của bài thỏa mãn điều kiện: $n\le 300$.

## Ví dụ:
### Dữ liệu vào:
```
6 2
1 3 10 2 1 4
```

### Dữ liệu ra:
```
12
```

### Giải thích:
- Bước $1$: Alice chọn hai thẻ cuối hàng là $1$ và $4$ và nhận được số tiền thưởng là $|4-1|=3$;
- Bước $2$: Alice loại thẻ cuối hàng có giá trị $2$;
- Bước $3$: Alice chọn một thẻ đầu hàng và một thẻ cuối hàng có giá trị là $1$ và $10$ và nhận được số tiền thưởng là $|10-1|=9$;
Tổng tiền thưởng Alice nhận được là $3+9=12$.