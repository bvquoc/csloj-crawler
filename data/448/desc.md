Bạn Trang đang soạn thảo văn bản, thật không may là trình soạn thẻo của bạn ấy không có chế độ tự động dàn các từ trên mỗi dòng sao cho được một văn bản đẹp. Em hãy giúp bạn Trang nhé.

Cho một văn bản gồm ~N~ từ, từ thứ ~i~ có độ dài ~l_i~. Một dòng của văn bản có độ dài tối đa là ~L~. Giả sử ta “dàn” một số từ trên một dòng có tổng độ dài là ~T\le L~ thì độ xấu của dòng đó là ~L – T~. Ta định nghĩa độ xấu của văn bản là độ xấu lớn nhất của các dòng của văn bản đó. Hãy tính độ xấu nhỏ nhất của văn bản có thể “dàn” được.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên ~N, L~ cách nhau bởi một dấu cách;
- Dòng thứ hai chứa ~N~ số nguyên dương ~l_1, l_2, …, l_N~, mỗi số cách nhau bởi một dấu cách.

## Dữ liệu ra:
- Là cách dàn văn bản, gồm một hoặc nhiều dòng, mỗi dòng ghi theo thứ tự độ dài các từ dàn trên dòng đó, các số ghi cách nhau một khoảng trắng.

## Ví dụ:
#### Dữ liệu vào:
```
4 5
3 2 2 4
```

#### Dữ liệu ra:
```
3
2 2
4
```

#### Giải thích:
- Văn bản trên dàn thành ~3~ dòng: dòng gồm ~1~ từ đầu có độ dài ~3~, dòng ~2~ gồm ~2~ từ tiếp theo có độ dài ~4~, dòng ~3~ gồm từ cuối cùng có độ dài ~4~. Độ xấu của các dòng lần lượt là ~2, 1, 1~. Do đó độ xấu của văn bản là ~2~ (Đây là cách dàn dòng tốt nhất)

## Giới hạn:
- ~1 ≤ N ≤ 6000; 1 ≤ L ≤ 1000; 1 ≤ l_i ≤ L~.