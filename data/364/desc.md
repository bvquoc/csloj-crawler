Kỳ thi học sinh giỏi khối $10$ môn Tin học năm nay có $n$ học sinh tham gia với tổng điểm của các học sinh lần lượt là các số tự nhiên $d_1, d_2, …, d_n$. BTC quyết định chọn các học sinh để trao giải theo nguyên tắc sau: Đầu tiên chọn $[\frac{n}{2}]$ (phần nguyên của $\frac{n}{2}$) số học sinh có điểm từ cao xuống thấp, sau đó chọn thêm những học sinh bằng điểm với học sinh có điểm thấp nhất trong số này. Em hãy giúp BTC tính số lượng học sinh có giải.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $n$;
- Dòng thứ hai chứa $n$ số tự nhiên $d_1, d_2, …, d_n$.
Hai số liên tiếp trên một dòng được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Một số nguyên duy nhất là số học sinh có giải.

## Ví dụ:
#### Dữ liệu vào:
```
5
98 97 100 98 98
```

#### Dữ liệu ra:
```
4
```

#### Giải thích:
- $[\frac{n}{2}] = [\frac{5}{2}] = 2$. Hai học sinh được chọn có điểm từ cao xuống thấp là $100$ và $98$, tiếp theo, còn $2$ học sinh cùng đạt $98$ điểm nữa cũng được chọn. Vậy có $4$ học sinh có giải.

## Giới hạn:
- $2 ≤ n ≤ 10^5; 0 ≤ d_i ≤ 10^6$.