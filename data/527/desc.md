Giáo sư Honest là một tay bịp bợm có hạng trong giới khoa học. Trong một công trình nghiên cứu khoa học, ông vừa tuyên bố rằng đã phát minh ra thuật toán tính ước chung lớn nhất của một dãy số có độ phức tạp ~O(\frac{1}{n})~, tức là  dãy số càng nhiều phần tử thì thuật toán chạy càng nhanh. Trong báo cáo khoa học của mình, Honest bày ra thí nghiệm như sau:

Cho một dãy số gồm ~n~ số nguyên dương. Honest tính tổng của các ước chung lớn nhất của tất cả các dãy con liên tiếp của dãy số trên (dãy con liên tiếp của một dãy số ~n~ phần tử được định nghĩa là dãy con chứa phần tử thứ ~L, L + 1, ..., R~ với ~1 ≤ L ≤ R ≤ n~).

Honest tuyên bố rằng ông ta có thể thực hiện thao tác vừa rồi trong ~O(n)~ bằng cách áp dụng thuật toán tính ước chung lớn nhất của một dãy số trên tất cả ~\frac{n(n+1)}{2}~ dãy con, tức là ~O(n^2)~, dãy con liên tiếp của dãy số. Vì thế, thuật toán của ông ta có độ phức tạp là ~O(\frac{1}{n})~.

"Không thể nào có chuyện như vậy!!!". Hội đồng khoa học của diễn đàn VNOI muốn lật tẩy trò lừa trẻ con của Honest. Tuy nhiên việc đầu tiên họ cần tìm ra cách để thực hiện lại thí nghiệm của Honest với tốc độ nhanh nhất có thể. Các bạn hãy giúp in ra số dư của kết quả thí nghiệm mà Honest đã tiến hành khi chia cho ~10^9 + 7~ nhé.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~n~;
- Dòng tiếp theo chứa ~n~ số nguyên dương ~a_1, a_2, …, a_n~. Hai số liên tiếp trên một dòng được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Một số nguyên duy nhất là tổng ước chung lớn nhất của ~\frac{n(n+1)}{2}~ dãy con liên tiếp của dãy đã cho (kết quả được chia cho ~10^9 + 7~ lấy phần dư).

## Ví dụ:
#### Dữ liệu vào:
```
4
3 6 4 8
```

#### Dữ liệu ra:
```
34
```

#### Giải thích:
Ta có ~10~ dãy con:
- Dãy con ~1~ phần tử: ~(3); (6); (4); (8)~. UCLN lần lượt là ~3, 6, 4, 8~;
- Dãy con ~2~ phần tử: ~(3, 6); (6, 4); (4, 8)~. UCLN lần lượt là ~3, 2, 4~;
- Dãy con ~3~ phần tử: ~(3, 6, 4); (6, 4, 8)~. UCLN lần lượt là ~1, 2~;
- Dãy con ~4~ phần tử: ~(3, 6, 4, 8)~. UCLN là ~1~.

Tổng các UCLN của các dãy là: ~3 + 6 + 4 + 8 + 3 + 2 + 4 + 1 + 2 + 1 = 34~

## Giới hạn:
- **Subtask** ~1\ (12.5\%): 1 ≤ n ≤ 100, 1 ≤ a_i ≤ 10^{12}~;
- **Subtask** ~2\ (12.5\%): 1 ≤ n ≤ 5000, 1 ≤ a_i ≤ 10^{12}~;
- **Subtask** ~3\ (25\%): 1 ≤ n ≤ 10^5, 1 ≤ a_i ≤ 200~;
- **Subtask** ~4\ (50\%): 1 ≤ n ≤ 10^5, 1 ≤ a_i ≤ 10^{12}~.