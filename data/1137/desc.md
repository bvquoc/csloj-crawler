**<center>Nguồn: Đề đề xuất PreVNOI 2013 của Hải Dương</center>**
<br>
BTFENCE - Hàng rào lượn sóng
BT đã xây dựng xong cho mình một ngôi nhà mới. Công việc cuối cùng là cần phải làm một hàng rào ở mặt tiền của ngôi nhà. Vốn là một con người kỳ quặc, BT muốn dựng một hàng rào theo qui tắc sau:
- Hàng rào được ghép từ $N$ tấm gỗ có chiều rộng đơn vị và chiều cao là $1, 2, ..., N$ (hai tấm gỗ khác nhau có chiều cao khác nhau)
- Các tấm gỗ phải được ghép lại theo qui tắc, mỗi một tấm, ngoại trừ tấm số $1$ và tấm số $n$ thì hoặc thấp hơn hai tấm gỗ bên cạnh hoặc cao hơn hai tấm này

Chính xác hơn, hàng rào có thể xem như là một hoán vị $a_1, a_2, ..., a_N$ của $\{1,2,...,N\}$ sao cho:
$$∀i: 1 < i < n, \left(a_i - a_{i - 1}\right . \left(a_i - a_{i + 1}\right) > 0$$
BT nhanh chóng phát hiện ra rằng sẽ có nhiều hàng rào khác thỏa mãn các yêu cầu trên. Ông ta ghi lại các hàng rào lần lượt từ nhỏ đến lớn theo qui tắc: Hàng rào $A$ (được mô tả bời hoán vị $a_1, a_2, ..., a_N$)  nhỏ hơn hàng rào B (được mô tả bởi hoán vị $b_1, b_2, ..., b_N$) nếu như tồn tại số tự nhiên $i$ mà $(∀j: j < i)\ a_j = b_j$ và $a_i < b_i$. Hàng rào đầu tiên mang thứ tự $1$.
Ví dụ với n =4 thì các hàng rào trong từ điển được mô tả như hình dưới đây:
<center><img src="/images/problems/1138/btfence.png"></center>

Tất nhiên là BT đã quyết định chọn một hàng rào trong số các hàng rào khác nhau kể trên. Khi đến chơi nhà một người bạn, ông ta khoe hàng rào của mình. Tuy nhiên vì không mang theo bản ghi chép nên ông ta chỉ có thể nói cho người bạn số thứ tự hàng rào mà ông lựa chọn. Hãy giúp BT vẽ lại chính xác hàng rào này.

## Dữ liệu vào:
- Dòng đầu tiên ghi số nguyên dương $K\ (1\le K \le N)$ là số bộ dữ liệu.
- $K$ dòng tiếp theo, mỗi dòng mô tả một test gồm hai số nguyên dương $N, C\ (1\le N \le 20)$ lần lượt là số tấm gỗ và số thứ tự hàng rào của BT. Dữ liệu đảm bảo rằng tồn tại hàng rào thứ tự $C$. Hơn nữa với $N ≤20$ số lượng hàng rào sẽ nằm trong phạm vi kiểu số nguyên $64\text{bit}$ có dấu (**long long**  với C++ và **int64** với Pascal)

## Dữ liệu ra:
- In ra $K$ dòng, mỗi dòng ghi kết quả của một test theo thứ tự trong dữ liệu vào

## Ví dụ:
### Dữ liệu vào:
```
2
2 1
3 3
```

### Dữ liệu ra:
```
1 2
2 3 1
```