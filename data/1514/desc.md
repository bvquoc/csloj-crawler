**<center>NGUỒN: VOI 2018 - 2019</center>**
**<center>Test không chính thức (thầy Hồ Đắc Phương)</center>**

Một dãy các chữ số từ `0` đến `9` được gọi là ***dãy đối xứng*** nếu như đọc từ trái sang phải hay từ phải sang trái đều thu được kết quả giống nhau. Ví dụ như dãy rỗng và hai dãy `010`, `0110` là các dãy đối xứng, còn các dãy `123`, `4449` không phải là dãy đối xứng.

Với dãy ~S~ độ dài ~k~, các kí tự được đánh số từ ~1~ đến ~k~. Kí hiệu một dãy con của ~S~ gồm các kí tự liên tiếp từ vị trí ~a~ đến vị trí ~b~ là ~S(a, b)~ (giả thiết nếu ~a > b~ thì ~S(a, b)~ là dãy rỗng), dãy ~S~ được định nghĩa là ***dãy siêu đối xứng*** nếu đồng thời thỏa mãn các điều kiện sau:
- ~S(1, k)~ là dãy đối xứng;
- ~S(1,\left\lfloor {\frac{k}{2}} \right\rfloor)~ là dãy đối xứng, trong đó kí hiệu ~\left\lfloor {x} \right\rfloor~ là số nguyên lớn nhất không vượt quả ~x~;
- ~S(k - \left\lfloor {\frac{k}{2}} \right\rfloor + 1,k)~ là dãy đối xứng.

Ví dụ các dãy `0`, `11`, `22322`, `454454` là các dãy siêu đối xứng, còn dãy `990099` không phải là dãy siêu đối xứng.

Một dãy được gọi là ***gần siêu đối xứng*** nếu như tồn tại một cách hoán đổi vị trí các phần tử của nó để thu được một dãy siêu đối xứng. Đương nhiên, một dãy siêu đối xứng cũng đồng thời là một dãy gần siêu đối xứng.

Một số nguyên dương ~d~ được gọi là ***số gần siêu đối xứng*** nếu như coi biểu diễn thập phân của nó như một dãy các chữ số từ `0` đến `9` (không có trường hợp dãy bắt đầu bởi chữ số `0`) thì dãy biểu diễn đó là một dãy gần siêu đối xứng. Lưu ý là sau khi hoán đổi vị trí các phần tử, dãy thu được có thể bắt đầu bởi chữ số `0`. Ví dụ, ~d =~ `9505000` là số gần siêu đối xứng vì tồn tại một cách hoán đổi vị trí các phần tử của dãy các chữ số biểu diễn ~d~ thành một dãy siêu đối xứng `0509050`.

**Vêu cầu:** Cho hai số nguyên dương ~p~ và ~q\ (p ≤ q)~, hãy tìm số lượng các số nguyên gần siêu đối xứng nằm trong khoảng từ ~p~ đến ~q~ (khoảng bao gồm cả ~p~ và ~q~).

## Dữ liệu vào:
- Một dòng duy nhất chứa hai số nguyên ~p~ và ~q~ cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra duy nhất một số là phần dư của số lượng số gần siêu đối xứng tìm được trong phép chia cho ~10^9+7~.

## Ví dụ:
#### Dữ liệu vào:
```
1 100
```

#### Dữ liệu ra:
```
19
```

#### Giải thích:
- Các số gần siêu đối xứng là ~1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,100~.

#### Dữ liệu vào:
```
3111120 3111125
```

#### Dữ liệu ra:
```
2
```

#### Giải thích:
- Hai số gần siêu đối xứng là ~3111122~ và ~3111123~.

## Giới hạn:
- Có ~20\%~ số lượng test ứng với ~20\%~ số điểm của bài thỏa mãn điều kiện: ~1 ≤p ≤q ≤10^5~;
- ~30\%~ số lượng test khác ứng với ~30\%~ số điểm của bài thỏa mãn điều kiện: ~p=10^{k-1}, q=10^k - 1, 2≤k≤18~;
- ~30\%~ số lượng test khác ứng với ~30\%~ số điểm của bài thỏa mãn điều kiện: ~1 ≤p ≤q ≤10^{18}~;
- ~20\%~ số lượng test còn lại ứng với ~20\%~ số điểm của bài thỏa mãn điều kiện: ~1 ≤p ≤q ≤10^{50000}~.